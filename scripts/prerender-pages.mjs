import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const WHERE = {
  en: 'For businesses in European countries.',
  el: 'Για επιχειρήσεις σε χώρες της Ευρώπης.',
};

const PAGES = [
  {
    file: 'index.html',
    h1: 'home.hero.title',
    lead: 'home.hero.subtitle',
    faq: 'home.faq',
    apps: [
      ['apps.onlineBooking.title', 'apps.onlineBooking.description'],
      ['apps.shopTraffic.title', 'apps.shopTraffic.description'],
      ['apps.foodOrder.title', 'apps.foodOrder.description'],
      ['apps.docsApp.title', 'apps.docsApp.description'],
      ['apps.schoolMeals.title', 'apps.schoolMeals.description'],
      ['apps.aiConsulting.title', 'apps.aiConsulting.description'],
    ],
  },
  {
    file: 'onlinebooking/index.html',
    h1: 'booking.hero.title',
    lead: 'booking.hero.subtitle',
    faq: 'booking.faq',
    groups: ['booking.problems.p'],
  },
  {
    file: 'foodorder/index.html',
    h1: 'foodorder.hero.title',
    lead: 'foodorder.hero.subtitle',
    faq: 'foodorder.faq',
    groups: ['foodorder.problems.p'],
  },
  {
    file: 'shoptraffic/index.html',
    h1: 'waitless.hero.title',
    lead: 'waitless.hero.subtitle',
    faq: 'waitless.faq',
    groups: ['waitless.problems.p'],
  },
  {
    file: 'schoolmeals/index.html',
    h1: 'schoolmeals.hero.title',
    lead: 'schoolmeals.hero.subtitle',
    faq: 'schoolmeals.faq',
    groups: ['schoolmeals.problems.p'],
  },
  {
    file: 'docsapp/index.html',
    h1: 'docsapp.hero.title',
    lead: 'docsapp.hero.subtitle',
    faq: 'docsapp.faq',
    groups: ['docsapp.problems.p'],
  },
  {
    file: 'ai/index.html',
    h1: 'ai.hero.title',
    lead: 'ai.hero.subtitle',
    faq: 'ai.faq',
    groups: ['ai.goals.g'],
  },
  {
    file: 'ai-score/index.html',
    h1: 'aiscore.hero.title',
    lead: 'aiscore.hero.subtitle',
    faq: 'aiscore.faq',
    groups: [],
  },
  {
    file: 'faq/index.html',
    h1: 'sitefaq.hero.title',
    lead: 'sitefaq.hero.subtitle',
    faq: 'sitefaq.faq',
    groups: [],
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function loadDict(lang) {
  return JSON.parse(readFileSync(resolve(root, `src/i18n/${lang}.json`), 'utf8'));
}

function t(dict, key) {
  const value = dict[key];
  if (!value) throw new Error(`Missing i18n key ${key}`);
  return value;
}

function numbered(dict, prefix) {
  const items = [];
  for (let i = 1; i <= 8; i += 1) {
    const title = dict[`${prefix}${i}.title`];
    if (!title) break;
    items.push({ title, text: dict[`${prefix}${i}.text`] || '' });
  }
  return items;
}

function faqItems(dict, prefix) {
  const items = [];
  for (let i = 1; i <= 16; i += 1) {
    const question = dict[`${prefix}.q${i}`];
    const answer = dict[`${prefix}.a${i}`];
    if (!question || !answer) break;
    items.push({ question, answer });
  }
  if (items.length === 0) throw new Error(`No FAQ items for ${prefix}`);
  return items;
}

function leadParagraph(dict, lang, leadKey) {
  const lead = t(dict, leadKey);
  const where = WHERE[lang];
  if (
    lead.includes('European') ||
    lead.includes('Ευρώπ') ||
    lead.includes('Cyprus') ||
    lead.includes('Κύπρ')
  ) {
    return lead;
  }
  return `${lead} ${where}`;
}

function renderLang(dict, lang, page) {
  const items = [];
  for (const pair of page.apps || []) {
    items.push({ title: t(dict, pair[0]), text: t(dict, pair[1]) });
  }
  for (const prefix of page.groups || []) {
    items.push(...numbered(dict, prefix));
  }
  const faqs = faqItems(dict, page.faq);
  const list = items
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.title)}</strong> ${escapeHtml(item.text)}</li>`,
    )
    .join('');
  const faqHtml = faqs
    .map(
      (item) =>
        `<h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p>`,
    )
    .join('');

  return {
    html: `<article lang="${lang}"><h1>${escapeHtml(t(dict, page.h1))}</h1><p>${escapeHtml(leadParagraph(dict, lang, page.lead))}</p>${list ? `<ul>${list}</ul>` : ''}<h2>${escapeHtml(t(dict, `${page.faq}.title`))}</h2>${faqHtml}</article>`,
    faqs,
  };
}

function faqJsonLd(enFaqs, elFaqs) {
  const mainEntity = [...enFaqs, ...elFaqs].map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  }));
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
}

function inject(html, body, jsonLd) {
  const main = `<main id="crawler-prerender">${body}</main>`;
  const rootRe = /<div id="root"([^>]*)>\s*(?:<main id="crawler-prerender">[\s\S]*?<\/main>\s*)?<\/div>/;
  if (!rootRe.test(html)) {
    throw new Error('Could not find <div id="root">');
  }
  let out = html.replace(rootRe, `<div id="root"$1>${main}</div>`);
  const faqScript = `<script type="application/ld+json" id="crawler-faq">${JSON.stringify(jsonLd)}</script>`;
  if (out.includes('id="crawler-faq"')) {
    out = out.replace(
      /<script type="application\/ld\+json" id="crawler-faq">[\s\S]*?<\/script>/,
      faqScript,
    );
  } else {
    out = out.replace('</head>', `    ${faqScript}\n  </head>`);
  }
  return out;
}

const en = loadDict('en');
const el = loadDict('el');

for (const page of PAGES) {
  const filePath = resolve(root, page.file);
  if (!existsSync(filePath)) throw new Error(`Missing ${page.file}`);
  const enBlock = renderLang(en, 'en', page);
  const elBlock = renderLang(el, 'el', page);
  const html = readFileSync(filePath, 'utf8');
  const next = inject(html, enBlock.html + elBlock.html, faqJsonLd(enBlock.faqs, elBlock.faqs));
  writeFileSync(filePath, next, 'utf8');
  console.log(`Prerendered ${page.file}`);
}
