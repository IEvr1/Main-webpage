/**
 * Capture real screenshots from local Salon_booking for the onlinebooking landing page.
 * Requires Salon_booking running on http://localhost:3002
 *
 * Usage:
 *   BOOKING_DASHBOARD_URL="http://localhost:3002/dashboard?code=..." npx playwright test --config=...
 *   or: node --experimental-vm-modules with playwright from npx cache
 */
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'landing');
const BASE = process.env.BOOKING_BASE_URL || 'http://localhost:3002';
const DASHBOARD_URL = process.env.BOOKING_DASHBOARD_URL;

function loadPlaywright() {
  try {
    return createRequire(import.meta.url)('playwright');
  } catch {
    throw new Error('Install playwright: npm i -D playwright && npx playwright install chromium');
  }
}

async function shot(page, path, opts = {}) {
  await page.waitForTimeout(800);
  await page.screenshot({ path, type: 'png', ...opts });
  console.log('Wrote', path);
}

async function main() {
  if (!DASHBOARD_URL) {
    throw new Error('Set BOOKING_DASHBOARD_URL to a valid /dashboard?code=... link');
  }

  const { chromium } = loadPlaywright();
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await mobile.goto(`${BASE}/chat?lang=el`, { waitUntil: 'networkidle' });
  await mobile.waitForTimeout(1500);
  const serviceBtn = mobile.locator('button').filter({ hasText: /Hair Cut|Κούρεμα/i }).first();
  if (await serviceBtn.count()) {
    await serviceBtn.click({ timeout: 3000 }).catch(() => {});
    await mobile.waitForTimeout(800);
  }
  await shot(mobile, join(outDir, 'booking-screenshot-chat.png'));
  await mobile.close();

  const desk = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1.5,
  });
  await desk.goto(DASHBOARD_URL, { waitUntil: 'networkidle' });
  await desk.addStyleTag({
    content: 'nextjs-portal,[data-nextjs-toast],[data-nextjs-dialog-overlay]{display:none!important}',
  });
  await desk.waitForTimeout(1500);
  await shot(desk, join(outDir, 'booking-screenshot-dashboard.png'), { fullPage: false });
  await desk.close();

  const smsPage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  // Public-looking manage link (real SMS template from sms-templates.ts)
  const manageUrl = 'https://book.nexaipla.com/l/a8k2mx';
  const smsBody =
    `Glow Beauty Salon: Το ραντεβού σας επιβεβαιώθηκε! Σας περιμένουμε Τρίτη 21/10, η ώρα 10:30.\nΧρειάζεστε αλλαγή στο ραντεβού σας; Πατήστε στο παρακάτω σύνδεσμο: ${manageUrl}`;
  const escaped = smsBody
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(manageUrl, `<span class="link">${manageUrl}</span>`);
  await smsPage.setContent(`<!DOCTYPE html>
<html lang="el"><head><meta charset="utf-8"/>
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
    <div class="time">Σήμερα 09:41</div>
  </div>
</body></html>`);
  await shot(smsPage, join(outDir, 'booking-screenshot-sms.png'));
  await smsPage.close();
  await browser.close();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
