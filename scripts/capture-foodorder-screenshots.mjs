/**
 * Capture OrderApp screenshots in EL + EN for /foodorder Take a look.
 * Requires food-order-app on http://localhost:3002
 *
 *   FOODORDER_DASHBOARD_URL="http://localhost:3002/dashboard?code=..." node scripts/capture-foodorder-screenshots.mjs
 */
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'landing');
const BASE = process.env.FOODORDER_BASE_URL || 'http://localhost:3002';
const DASHBOARD_URL = process.env.FOODORDER_DASHBOARD_URL;
const LANGS = ['el', 'en'];

function loadPlaywright() {
  try {
    return createRequire(import.meta.url)('playwright');
  } catch {
    throw new Error('Install playwright: npm i -D playwright && npx playwright install chromium');
  }
}

async function shot(page, path, opts = {}) {
  await page.waitForTimeout(700);
  await page.screenshot({ path, type: 'png', ...opts });
  console.log('Wrote', path);
}

function smsHtml(lang) {
  const manageUrl = 'https://order.nexaipla.com/l/b7k3nq';
  // Copy aligned with OrderApp src/lib/sms-templates.ts (buildOrderConfirmedSms)
  const smsBody =
    lang === 'el'
      ? `Souvlaki Express: Η παραγγελία σας, στο #1042 επιβεβαιώθηκε! παραλαβή Παρασκευή 16/10 στις 18:30.\nΔιαχείριση παραγγελίας: ${manageUrl}`
      : `Souvlaki Express: Order #1042 confirmed! pickup on Friday 16/10 at 18:30.\nManage your order: ${manageUrl}`;
  const timeLabel = lang === 'el' ? 'Σήμερα 17:41' : 'Today 5:41 PM';
  const escaped = smsBody
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(manageUrl, `<span class="link">${manageUrl}</span>`);
  return `<!DOCTYPE html>
<html lang="${lang}"><head><meta charset="utf-8"/>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background: #0b1220; color: #e8eef8; min-height: 100vh; display:flex; align-items:center; justify-content:center; padding: 24px; }
  .phone { width: 340px; background: #111827; border-radius: 28px; padding: 18px 14px 28px;
    border: 1px solid #243044; box-shadow: 0 20px 50px rgba(0,0,0,.45); }
  .status { display:flex; justify-content:space-between; font-size:12px; opacity:.7; margin-bottom:18px; padding:0 8px; }
  .header { text-align:center; margin-bottom: 22px; }
  .avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg,#ea580c,#c2410c);
    margin: 0 auto 8px; display:flex; align-items:center; justify-content:center; font-weight:700; color:#fff; }
  .name { font-size: 15px; font-weight: 600; }
  .sub { font-size: 12px; opacity: .55; margin-top: 2px; }
  .bubble { background: #1c2738; border-radius: 18px 18px 18px 4px; padding: 14px 16px; line-height: 1.55;
    font-size: 14px; white-space: pre-wrap; border: 1px solid #2a3a52; word-break: break-word; }
  .link { color: #fdba74; text-decoration: underline; }
  .time { font-size: 11px; opacity: .45; margin-top: 8px; margin-left: 4px; }
</style></head><body>
  <div class="phone">
    <div class="status"><span>17:41</span><span>LTE ●●●</span></div>
    <div class="header">
      <div class="avatar">S</div>
      <div class="name">Souvlaki Express</div>
      <div class="sub">SMS</div>
    </div>
    <div class="bubble">${escaped}</div>
    <div class="time">${timeLabel}</div>
  </div>
</body></html>`;
}

async function captureLang(browser, lang) {
  const hideNext = 'nextjs-portal,[data-nextjs-toast],[data-nextjs-dialog-overlay]{display:none!important}';

  // Menu / customer chat
  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await mobile.goto(`${BASE}/chat?lang=${lang}`, { waitUntil: 'networkidle' });
  await mobile.addStyleTag({ content: hideNext });
  await mobile.waitForTimeout(2000);
  // Try to advance past welcome into menu if options appear
  const firstOption = mobile
    .locator('button')
    .filter({ hasText: /menu|μενού|pickup|delivery|παραλαβή|παράδοση|order|παραγγελ/i })
    .first();
  if (await firstOption.count()) {
    await firstOption.click({ timeout: 3000 }).catch(() => {});
    await mobile.waitForTimeout(1000);
  }
  await shot(mobile, join(outDir, `foodorder-screenshot-menu-${lang}.png`));
  await mobile.close();

  // Dashboard
  const dashUrl = DASHBOARD_URL.includes('?')
    ? `${DASHBOARD_URL}&lang=${lang}`
    : `${DASHBOARD_URL}?lang=${lang}`;
  const desk = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1.5,
  });
  await desk.goto(dashUrl, { waitUntil: 'networkidle' });
  await desk.waitForTimeout(1200);
  const url = desk.url();
  if (!url.includes('lang=')) {
    await desk.goto(`${url}${url.includes('?') ? '&' : '?'}lang=${lang}`, {
      waitUntil: 'networkidle',
    });
  }
  await desk.addStyleTag({ content: hideNext });
  const langBtn = desk
    .locator('a,button')
    .filter({ hasText: new RegExp(`^${lang.toUpperCase()}$`) })
    .first();
  if (await langBtn.count()) {
    await langBtn.click().catch(() => {});
    await desk.waitForTimeout(600);
  }
  await shot(desk, join(outDir, `foodorder-screenshot-dashboard-${lang}.png`), {
    fullPage: false,
  });
  await desk.close();

  // SMS
  const smsPage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await smsPage.setContent(smsHtml(lang));
  await shot(smsPage, join(outDir, `foodorder-screenshot-sms-${lang}.png`));
  await smsPage.close();
}

async function main() {
  if (!DASHBOARD_URL) {
    throw new Error('Set FOODORDER_DASHBOARD_URL to a valid /dashboard?code=... link');
  }

  const { chromium } = loadPlaywright();
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  for (const lang of LANGS) {
    await captureLang(browser, lang);
  }
  await browser.close();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
