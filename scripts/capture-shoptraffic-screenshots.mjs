/**
 * Capture live-traffic-dashboard screenshots (EL + EN) for /shoptraffic Take a look.
 *
 *   SHOPTRAFFIC_OWNER_URL="https://.../owner/start/..." node scripts/capture-shoptraffic-screenshots.mjs
 */
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'landing');
const BASE =
  process.env.SHOPTRAFFIC_BASE_URL || 'https://live-traffic-dashboard.vercel.app';
const SHOP_SLUG = process.env.SHOPTRAFFIC_SHOP_SLUG || 'stellas-barber';
const OWNER_URL = process.env.SHOPTRAFFIC_OWNER_URL;
const LANGS = ['el', 'en'];

function loadPlaywright() {
  try {
    return createRequire(import.meta.url)('playwright');
  } catch {
    throw new Error('Install playwright: npm i -D playwright && npx playwright install chromium');
  }
}

async function shot(page, path) {
  await page.waitForTimeout(700);
  await page.screenshot({ path, type: 'png' });
  console.log('Wrote', path);
}

async function pickLang(page, lang) {
  const langBtn = page
    .locator('a,button')
    .filter({ hasText: new RegExp(`^${lang.toUpperCase()}$`) })
    .first();
  if (await langBtn.count()) {
    await langBtn.click().catch(() => {});
    await page.waitForTimeout(500);
  }
}

async function main() {
  if (!OWNER_URL) {
    throw new Error('Set SHOPTRAFFIC_OWNER_URL to a /owner/start/... link');
  }

  await mkdir(outDir, { recursive: true });
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch({ headless: true });
  const hideNoise =
    'nextjs-portal,[data-nextjs-toast],[data-nextjs-dialog-overlay],#vercel-live-feedback{display:none!important}';

  // Establish owner session once
  const owner = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await owner.goto(OWNER_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await owner.waitForTimeout(1200);

  // Force emergency OPEN so the public page shows a live level (not hours-closed)
  await owner.goto(`${BASE}/owner/announcements`, {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  await owner.waitForTimeout(800);
  const openBtn = owner.getByRole('button', { name: /^(Open|Ανοικτό)$/i }).first();
  if (await openBtn.count()) {
    await openBtn.click();
    await owner.waitForTimeout(1500);
  } else {
    console.warn('Emergency Open button not found on /owner/announcements');
  }

  // Push a traffic level so the public page looks live
  await owner.goto(`${BASE}/owner`, { waitUntil: 'networkidle', timeout: 60000 });
  await owner.waitForTimeout(800);
  const levelBtn = owner.getByRole('button', { name: /MEDIUM|ΜΕΤΡΙΑ|ΜΕΣΑΙΑ|LOW|ΧΑΜΗΛ|BUSY|ΑΠΑΣΧΟΛ/i }).first();
  if (await levelBtn.count()) {
    await levelBtn.click().catch(() => {});
    await owner.waitForTimeout(600);
  }

  for (const lang of LANGS) {
    // Owner status
    await owner.goto(`${BASE}/owner?lang=${lang}`, {
      waitUntil: 'networkidle',
      timeout: 60000,
    }).catch(async () => {
      await owner.goto(`${BASE}/owner`, { waitUntil: 'networkidle', timeout: 60000 });
    });
    await owner.addStyleTag({ content: hideNoise });
    await pickLang(owner, lang);
    await owner.waitForTimeout(800);
    await shot(owner, join(outDir, `shoptraffic-screenshot-owner-${lang}.png`));

    // Hours
    await owner.goto(`${BASE}/owner/hours?lang=${lang}`, {
      waitUntil: 'networkidle',
      timeout: 60000,
    }).catch(async () => {
      await owner.goto(`${BASE}/owner/hours`, { waitUntil: 'networkidle', timeout: 60000 });
    });
    await owner.addStyleTag({ content: hideNoise });
    await pickLang(owner, lang);
    await owner.waitForTimeout(800);
    await shot(owner, join(outDir, `shoptraffic-screenshot-hours-${lang}.png`));

    // Customer public page
    const customer = await browser.newPage({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
    });
    await customer.goto(`${BASE}/shop/${SHOP_SLUG}?lang=${lang}`, {
      waitUntil: 'networkidle',
      timeout: 60000,
    });
    await customer.addStyleTag({ content: hideNoise });
    await pickLang(customer, lang);
    await customer.waitForTimeout(1200);
    await shot(customer, join(outDir, `shoptraffic-screenshot-customer-${lang}.png`));
    await customer.close();
  }

  await owner.close();
  await browser.close();

  // Remove obsolete levels captures if present
  try {
    const { unlink } = await import('node:fs/promises');
    await unlink(join(outDir, 'shoptraffic-screenshot-levels-el.png')).catch(() => {});
    await unlink(join(outDir, 'shoptraffic-screenshot-levels-en.png')).catch(() => {});
  } catch {
    /* ignore */
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
