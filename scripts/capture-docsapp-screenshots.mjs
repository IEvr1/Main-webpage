/**
 * Capture DocsApp chat UI screenshots (EL + EN chrome variants) for /docsapp Take a look.
 * Requires DocsApp running at http://127.0.0.1:8080
 */
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'landing');
const BASE = process.env.DOCSAPP_BASE_URL || 'http://127.0.0.1:8080';

function loadPlaywright() {
  try {
    return createRequire(import.meta.url)('playwright');
  } catch {
    throw new Error('Install playwright: npm i -D playwright && npx playwright install chromium');
  }
}

async function shot(page, path) {
  await page.waitForTimeout(600);
  await page.screenshot({ path, type: 'png' });
  console.log('Wrote', path);
}

/** Localize chrome labels for marketing shots (DocsApp mixes EL folder strings in the live app). */
async function applyLocaleHints(page, lang) {
  await page.evaluate((lang) => {
    const map =
      lang === 'el'
        ? {
            docsTitle: 'Έγγραφα',
            upload: 'Ανέβασμα εγγράφου',
            hint: 'PDF, DOCX, Excel, CSV, εικόνες, txt, md · max 50 MB',
            chat: 'Συνομιλία',
            documents: 'Έγγραφα',
            refresh: 'Ανανέωση',
            placeholder: 'Γράψε οτιδήποτε…',
            folder: '+ Φάκελος',
            history: 'Ιστορικό Chat',
            noConv: 'Δεν υπάρχουν συνομιλίες ακόμα.',
            newChat: 'Νέα συνομιλία',
            root: 'Γενικά',
          }
        : {
            docsTitle: 'Documents',
            upload: 'Upload document',
            hint: 'Select a folder before upload · PDF, DOCX, Excel, CSV, images, txt, md · max 50 MB',
            chat: 'Chat',
            documents: 'Documents',
            refresh: 'Refresh',
            placeholder: 'Say anything…',
            folder: '+ Folder',
            history: 'Chat History',
            noConv: 'No conversations yet.',
            newChat: 'New chat',
            root: 'General',
          };
    const h2 = document.querySelector('.sidebar-header h2');
    if (h2) h2.textContent = map.docsTitle;
    const upload = document.getElementById('uploadBtn');
    if (upload) upload.textContent = map.upload;
    const hint = document.querySelector('.upload-hint');
    if (hint) hint.textContent = map.hint;
    const chat = document.querySelector('.mode-btn[data-mode="chat"]');
    if (chat) chat.textContent = map.chat;
    const docs = document.querySelector('.mode-btn[data-mode="documents"]');
    if (docs) docs.textContent = map.documents;
    const refresh = document.getElementById('newChatBtn');
    if (refresh) refresh.textContent = map.refresh;
    const input = document.getElementById('questionInput');
    if (input) input.placeholder = map.placeholder;
    const folderBtn = document.getElementById('folderCreateBtn');
    if (folderBtn) folderBtn.textContent = map.folder;
    document.body.innerHTML = document.body.innerHTML
      .replaceAll('Γενικά', map.root)
      .replaceAll('Φάκελος', lang === 'el' ? 'Φάκελος' : 'Folder')
      .replaceAll('— Επίλεξε φάκελο —', lang === 'el' ? '— Επίλεξε φάκελο —' : '— Select a folder —')
      .replaceAll(
        'Επίλεξε φάκελο από το dropdown ή το sidebar',
        lang === 'el'
          ? 'Επίλεξε φάκελο από το dropdown ή το sidebar'
          : 'Select a folder from the dropdown or the sidebar',
      )
      .replaceAll(
        'Επίλεξε φάκελο πριν το upload',
        lang === 'el' ? 'Επίλεξε φάκελο πριν το upload' : 'Select a folder before upload',
      );
    // Re-apply direct text after innerHTML rewrite wiped node refs
    const h2b = document.querySelector('.sidebar-header h2');
    if (h2b) h2b.textContent = map.docsTitle;
    const uploadb = document.getElementById('uploadBtn');
    if (uploadb) uploadb.textContent = map.upload;
    const hintb = document.querySelector('.upload-hint');
    if (hintb) hintb.textContent = map.hint;
    const chatb = document.querySelector('.mode-btn[data-mode="chat"]');
    if (chatb) chatb.textContent = map.chat;
    const docsb = document.querySelector('.mode-btn[data-mode="documents"]');
    if (docsb) docsb.textContent = map.documents;
    const refreshb = document.getElementById('newChatBtn');
    if (refreshb) refreshb.textContent = map.refresh;
    const inputb = document.getElementById('questionInput');
    if (inputb) inputb.placeholder = map.placeholder;
    const folderBtnb = document.getElementById('folderCreateBtn');
    if (folderBtnb) folderBtnb.textContent = map.folder;
  }, lang);
}

async function captureLocale(browser, lang) {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 840 },
    deviceScaleFactor: 1.5,
  });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await applyLocaleHints(page, lang);

  // Folders / sidebar focus
  await shot(page, join(outDir, `docsapp-screenshot-folders-${lang}.png`));

  // Inbox / document list — click documents mode if needed, expand sidebar
  const docsMode = page.locator('.mode-btn[data-mode="documents"]');
  if (await docsMode.count()) {
    await docsMode.click();
    await page.waitForTimeout(500);
  }
  await applyLocaleHints(page, lang);
  await shot(page, join(outDir, `docsapp-screenshot-inbox-${lang}.png`));

  // Chat view — switch to chat and seed a visible exchange if empty
  const chatMode = page.locator('.mode-btn[data-mode="chat"]');
  if (await chatMode.count()) {
    await chatMode.click();
    await page.waitForTimeout(400);
  }
  await applyLocaleHints(page, lang);

  const hasMessages = (await page.locator('.messages-viewport .message, .msg, .bubble').count()) > 0;
  if (!hasMessages) {
    const userText =
      lang === 'el'
        ? 'Περίληψε τι καλύπτει το συμβόλαιο.'
        : 'Summarize what this contract covers.';
    const asstText =
      lang === 'el'
        ? 'Βάσει του εγγράφου, το συμβόλαιο καλύπτει τους όρους συνεργασίας, τη διάρκεια και τις υποχρεώσεις των μερών. [Πηγή: econtract-gr.pdf]'
        : 'Based on the document, the contract covers collaboration terms, duration, and the parties’ obligations. [Source: econtract-gr.pdf]';
    await page.evaluate(
      ({ userText, asstText }) => {
        const vp = document.getElementById('messagesViewport');
        if (!vp) return;
        vp.innerHTML = `
          <div class="message user" style="display:flex;justify-content:flex-end;margin:12px 16px;">
            <div style="background:#5b7c6b;color:#fff;padding:10px 14px;border-radius:14px;max-width:70%;line-height:1.45;">${userText}</div>
          </div>
          <div class="message assistant" style="display:flex;justify-content:flex-start;margin:12px 16px;">
            <div style="background:#f3f4f6;color:#111;padding:10px 14px;border-radius:14px;max-width:75%;line-height:1.45;">${asstText}</div>
          </div>`;
      },
      { userText, asstText },
    );
  }
  await shot(page, join(outDir, `docsapp-screenshot-chat-${lang}.png`));
  await page.close();
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch({ headless: true });
  await captureLocale(browser, 'el');
  await captureLocale(browser, 'en');
  await browser.close();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
