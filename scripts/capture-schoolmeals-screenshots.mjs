/**
 * Capture School_Meal_Plan screenshots (EL + EN) for /schoolmeals Take a look.
 *
 * Loads tokens from School_Meal_Plan/.env.local when present, or:
 *
 *   SCHOOLMEALS_BASE_URL=https://... \
 *   SCHOOLMEALS_COOK_TOKEN=... \   # staff_access_links.short_token for role=cook
 *   SCHOOLMEALS_PARENT_TOKEN=... \ # children.short_token
 *   node scripts/capture-schoolmeals-screenshots.mjs
 *
 * Optional: SCHOOLMEALS_COOK_PIN if the cook magic link asks for a PIN
 * Optional: SCHOOLMEALS_ENV_FILE=C:/AI_apps/School_Meal_Plan/.env.local
 * Optional: DATABASE_URL to resolve a parent short_token automatically
 */
import { mkdir, readFile, unlink } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'landing');
const LANGS = ['el', 'en'];

function loadPlaywright() {
  try {
    return createRequire(import.meta.url)('playwright');
  } catch {
    throw new Error('Install playwright: npm i -D playwright && npx playwright install chromium');
  }
}

function parseEnvFile(text) {
  const out = {};
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

async function loadMealPlanEnv() {
  const candidates = [
    process.env.SCHOOLMEALS_ENV_FILE,
    resolve(__dirname, '../../School_Meal_Plan/.env.local'),
    resolve(__dirname, '../../School_Meal_Plan/.env'),
  ].filter(Boolean);

  for (const file of candidates) {
    if (!existsSync(file)) continue;
    const parsed = parseEnvFile(await readFile(file, 'utf8'));
    return { file, parsed };
  }
  return { file: null, parsed: {} };
}

async function resolveParentToken(databaseUrl) {
  if (!databaseUrl) return null;
  try {
    const { neon } = createRequire(import.meta.url)('@neondatabase/serverless');
    const sql = neon(databaseUrl);
    const rows = await sql`
      SELECT short_token FROM children WHERE active = true LIMIT 1
    `;
    return rows[0]?.short_token || null;
  } catch (err) {
    console.warn('Could not resolve parent token from DB:', err.message);
    return null;
  }
}

async function shot(page, path) {
  await page.waitForTimeout(700);
  await page.screenshot({ path, type: 'png' });
  console.log('Wrote', path);
}

async function setLocale(page, lang) {
  await page.evaluate((loc) => {
    document.cookie = `locale=${loc};path=/;max-age=31536000`;
    try {
      localStorage.setItem('locale', loc);
    } catch {
      /* ignore */
    }
  }, lang);

  const langBtn = page
    .locator('button')
    .filter({ hasText: new RegExp(`^${lang.toUpperCase()}$`) })
    .first();
  if (await langBtn.count()) {
    await langBtn.click().catch(() => {});
    await page.waitForTimeout(500);
  }
}

async function waitReady(page, readyText) {
  if (readyText) {
    await page
      .waitForFunction(
        (needle) => (document.body?.innerText || '').includes(needle),
        readyText,
        { timeout: 45000 },
      )
      .catch(() => {});
  }
  await page.waitForTimeout(900);
}

async function captureLang(browser, { base, cookToken, parentToken, lang }) {
  const hideNoise =
    'nextjs-portal,[data-nextjs-toast],[data-nextjs-dialog-overlay],#vercel-live-feedback{display:none!important}';

  // Public home (mobile)
  const home = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await home.goto(base, { waitUntil: 'networkidle', timeout: 60000 });
  await setLocale(home, lang);
  await home.goto(base, { waitUntil: 'networkidle', timeout: 60000 });
  await home.addStyleTag({ content: hideNoise });
  await waitReady(
    home,
    lang === 'en' ? 'All-day meal organisation' : 'Οργάνωση σίτισης',
  );
  await shot(home, join(outDir, `schoolmeals-screenshot-home-${lang}.png`));
  await home.close();

  // Kitchen dashboard (desktop): magic link establishes session, then /cook
  const kitchenCtx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const kitchen = await kitchenCtx.newPage();
  await kitchen.goto(`${base}/m/${cookToken}`, {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  const cookPin = process.env.SCHOOLMEALS_COOK_PIN;
  if (cookPin) {
    const pinInput = kitchen.locator('input[type="password"], input[inputmode="numeric"]').first();
    if (await pinInput.count()) {
      await pinInput.fill(cookPin);
      await kitchen.locator('button[type="submit"]').first().click().catch(() => {});
      await kitchen.waitForTimeout(1200);
    }
  }
  if (!kitchen.url().includes('/cook')) {
    await kitchen.goto(`${base}/cook`, { waitUntil: 'networkidle', timeout: 60000 });
  }
  await setLocale(kitchen, lang);
  await kitchen.reload({ waitUntil: 'networkidle' }).catch(() => {});
  await kitchen.addStyleTag({ content: hideNoise });
  await waitReady(kitchen, lang === 'en' ? 'Kitchen' : 'Κουζίνα');
  await shot(kitchen, join(outDir, `schoolmeals-screenshot-kitchen-${lang}.png`));
  await kitchenCtx.close();

  // Parent portal (mobile)
  const parent = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await parent.goto(`${base}/p/${parentToken}`, {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  await setLocale(parent, lang);
  await parent.goto(`${base}/p/${parentToken}`, {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  await parent.addStyleTag({ content: hideNoise });
  await waitReady(
    parent,
    lang === 'en' ? 'Future absences' : 'Μελλοντικές απουσίες',
  );
  await shot(parent, join(outDir, `schoolmeals-screenshot-parent-${lang}.png`));
  await parent.close();
}

async function main() {
  const { file, parsed } = await loadMealPlanEnv();
  if (file) console.log('Loaded env from', file);

  const base = (
    process.env.SCHOOLMEALS_BASE_URL ||
    parsed.NEXT_PUBLIC_APP_URL ||
    'https://bgeriou-meal-plan.nexaipla.com'
  ).replace(/\/$/, '');

  const cookToken =
    process.env.SCHOOLMEALS_COOK_TOKEN || parsed.MAGEIRAS_TOKEN;
  if (!cookToken) {
    throw new Error('Set SCHOOLMEALS_COOK_TOKEN or MAGEIRAS_TOKEN in School_Meal_Plan/.env.local');
  }

  let parentToken =
    process.env.SCHOOLMEALS_PARENT_TOKEN || parsed.SCHOOLMEALS_PARENT_TOKEN;
  if (!parentToken) {
    parentToken = await resolveParentToken(
      process.env.DATABASE_URL || parsed.DATABASE_URL,
    );
  }
  if (!parentToken) {
    throw new Error(
      'Set SCHOOLMEALS_PARENT_TOKEN or provide DATABASE_URL to pick an active child short_token',
    );
  }

  await mkdir(outDir, { recursive: true });
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch({ headless: true });

  for (const lang of LANGS) {
    await captureLang(browser, { base, cookToken, parentToken, lang });
  }

  await browser.close();

  // Remove obsolete SVG placeholders
  for (const name of ['home', 'kitchen', 'parent']) {
    await unlink(join(outDir, `schoolmeals-screenshot-${name}.svg`)).catch(() => {});
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
