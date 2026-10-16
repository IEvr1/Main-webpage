/**
 * Capture Salon_booking screenshots in EL + EN for /onlinebooking Take a look.
 * Requires Salon_booking on http://localhost:3002
 *
 *   BOOKING_DASHBOARD_URL="http://localhost:3002/dashboard?code=..." node scripts/capture-booking-screenshots.mjs
 */
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'landing');
const BASE = process.env.BOOKING_BASE_URL || 'http://localhost:3002';
const DASHBOARD_URL = process.env.BOOKING_DASHBOARD_URL;
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
  const manageUrl = 'https://book.nexaipla.com/l/a8k2mx';
  const smsBody =
    lang === 'el'
      ? `Glow Beauty Salon: Το ραντεβού σας επιβεβαιώθηκε! Σας περιμένουμε Τρίτη 21/10, η ώρα 10:30.\nΧρειάζεστε αλλαγή στο ραντεβού σας; Πατήστε στο παρακάτω σύνδεσμο: ${manageUrl}`
      : `Glow Beauty Salon: Your appointment is confirmed! We look forward to seeing you on Tuesday 21/10, at 10:30.\nNeed to change your appointment? Tap the link below: ${manageUrl}`;
  const timeLabel = lang === 'el' ? 'Σήμερα 09:41' : 'Today 9:41';
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
  .avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg,#5b7c6b,#3d5a4c);
    margin: 0 auto 8px; display:flex; align-items:center; justify-content:center; font-weight:700; color:#fff; }
  .name { font-size: 15px; font-weight: 600; }
  .sub { font-size: 12px; opacity: .55; margin-top: 2px; }
  .bubble { background: #1c2738; border-radius: 18px 18px 18px 4px; padding: 14px 16px; line-height: 1.55;
    font-size: 14px; white-space: pre-wrap; border: 1px solid #2a3a52; word-break: break-word; }
  .link { color: #7dd3a0; text-decoration: underline; }
  .time { font-size: 11px; opacity: .45; margin-top: 8px; margin-left: 4px; }
</style></head><body>
  <div class="phone">
    <div class="status"><span>9:41</span><span>LTE ●●●</span></div>
    <div class="header">
      <div class="avatar">G</div>
      <div class="name">Glow Beauty Salon</div>
      <div class="sub">SMS</div>
    </div>
    <div class="bubble">${escaped}</div>
    <div class="time">${timeLabel}</div>
  </div>
</body></html>`;
}

async function captureLang(browser, lang) {
  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await mobile.goto(`${BASE}/chat?lang=${lang}`, { waitUntil: 'networkidle' });
  await mobile.addStyleTag({
    content: 'nextjs-portal,[data-nextjs-toast],[data-nextjs-dialog-overlay]{display:none!important}',
  });
  await mobile.waitForSelector('button', { timeout: 15000 }).catch(() => {});
  await mobile.waitForTimeout(2000);
  const serviceBtn = mobile
    .locator('button')
    .filter({ hasText: /Hair Cut|Hair Color|Κούρεμα|Βαφή|Nail|Facial/i })
    .first();
  if (await serviceBtn.count()) {
    await serviceBtn.click({ timeout: 5000 }).catch(() => {});
    await mobile.waitForTimeout(1000);
  }
  await shot(mobile, join(outDir, `booking-screenshot-chat-${lang}.png`));
  await mobile.close();

  const dashUrl = DASHBOARD_URL.includes('?')
    ? `${DASHBOARD_URL}&lang=${lang}`
    : `${DASHBOARD_URL}?lang=${lang}`;
  const desk = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1.5,
  });
  await desk.goto(dashUrl, { waitUntil: 'networkidle' });
  // Prefer cookie-auth redirect to /dashboard — append lang if needed
  const url = desk.url();
  if (!url.includes('lang=')) {
    await desk.goto(`${url}${url.includes('?') ? '&' : '?'}lang=${lang}`, {
      waitUntil: 'networkidle',
    });
  }
  await desk.addStyleTag({
    content: 'nextjs-portal,[data-nextjs-toast],[data-nextjs-dialog-overlay]{display:none!important}',
  });
  // Click language if switcher present
  const langBtn = desk.locator(`a,button`).filter({ hasText: new RegExp(`^${lang.toUpperCase()}$`) }).first();
  if (await langBtn.count()) {
    await langBtn.click().catch(() => {});
    await desk.waitForTimeout(600);
  }
  await shot(desk, join(outDir, `booking-screenshot-dashboard-${lang}.png`), { fullPage: false });
  await desk.close();

  const smsPage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await smsPage.setContent(smsHtml(lang));
  await shot(smsPage, join(outDir, `booking-screenshot-sms-${lang}.png`));
  await smsPage.close();
}

async function main() {
  if (!DASHBOARD_URL) {
    throw new Error('Set BOOKING_DASHBOARD_URL to a valid /dashboard?code=... link');
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
