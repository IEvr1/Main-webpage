import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const contentDir = resolve(root, 'content/articles');
const manifestDir = resolve(root, 'src/articles/generated');
const siteUrl = 'https://www.nexaipla.com';

const APP_HREFS = {
  'online-booking': '/onlinebooking/',
  'food-order': '/foodorder/',
  'shop-traffic': '/shoptraffic/',
  'docs-app': '/docsapp/',
  'school-meals': '/schoolmeals/',
  'custom-apps': '/custom/',
};

marked.setOptions({ gfm: true, breaks: false });

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toIsoDate(value) {
  if (!value) return new Date().toISOString().slice(0, 10);
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date().toISOString().slice(0, 10) : d.toISOString().slice(0, 10);
}

function articlePath(slug, lang) {
  return lang === 'en' ? `/en/articles/${slug}` : `/articles/${slug}`;
}

function listingPath(lang) {
  return lang === 'en' ? '/en/articles' : '/articles';
}

function readArticles() {
  if (!existsSync(contentDir)) {
    return new Map();
  }

  const files = readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  const bySlug = new Map();

  for (const file of files) {
    const match = file.match(/^(.+)\.(el|en)\.md$/);
    if (!match) {
      console.warn(`Skipping ${file} — expected {slug}.{el|en}.md`);
      continue;
    }

    const [, slugFromFile, lang] = match;
    const raw = readFileSync(join(contentDir, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = data.slug || slugFromFile;

    if (data.draft) continue;

    if (!bySlug.has(slug)) {
      bySlug.set(slug, { slug, locales: {} });
    }

    const entry = bySlug.get(slug);
    entry.locales[lang] = {
      ...data,
      slug,
      lang,
      bodyHtml: marked.parse(content.trim()),
      date: toIsoDate(data.date),
      updated: toIsoDate(data.updated || data.date),
    };
  }

  return bySlug;
}

function buildJsonLd({ title, description, url, image, date, updated, author, lang, slug }) {
  const breadcrumbArticlesLabel = lang === 'el' ? 'Άρθρα' : 'Articles';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: image.startsWith('http') ? image : `${siteUrl}${image}`,
        datePublished: date,
        dateModified: updated,
        author: {
          '@type': 'Organization',
          name: author || 'NexAIpla',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'NexAIpla',
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/favicon-32x32.png`,
          },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        inLanguage: lang === 'el' ? 'el' : 'en',
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'NexAIpla', item: siteUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: breadcrumbArticlesLabel,
            item: `${siteUrl}${listingPath(lang)}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
    ],
  };
}

function buildArticleHead({ locale, siblingLocale, slug }) {
  const title = locale.seoTitle || locale.title;
  const description = locale.description;
  const canonical = `${siteUrl}${articlePath(slug, locale.lang)}`;
  const elUrl = `${siteUrl}${articlePath(slug, 'el')}`;
  const enUrl = `${siteUrl}${articlePath(slug, 'en')}`;
  const image = locale.image || '/og-image.svg';
  const ogImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const jsonLd = buildJsonLd({
    title: locale.title,
    description,
    url: canonical,
    image: ogImage,
    date: locale.date,
    updated: locale.updated,
    author: locale.author,
    lang: locale.lang,
    slug,
  });

  return `<!doctype html>
<html lang="${locale.lang === 'el' ? 'el' : 'en'}">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#f8fafc" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="el" href="${elUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${elUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="NexAIpla" />
    <meta property="og:locale" content="${locale.lang === 'el' ? 'el' : 'en_US'}" />
    <meta property="og:locale:alternate" content="${locale.lang === 'el' ? 'en_US' : 'el'}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="article:published_time" content="${locale.date}" />
    <meta property="article:modified_time" content="${locale.updated}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImage}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body>
    <article id="article-static" class="article-prerender container" data-slug="${slug}" data-lang="${locale.lang}">
      <header class="article-prerender__header">
        <p class="article-prerender__meta">${escapeHtml(locale.author || 'NexAIpla')}</p>
        <h1 class="article-prerender__title">${escapeHtml(locale.title)}</h1>
      </header>
      <div class="article-body">${locale.bodyHtml}</div>
    </article>
    <div id="root" data-page="article" data-slug="${slug}" data-lang="${locale.lang}"></div>
    <script type="application/json" id="article-data">${JSON.stringify({
      slug,
      lang: locale.lang,
      title: locale.title,
      description,
      date: locale.date,
      updated: locale.updated,
      author: locale.author || 'NexAIpla',
      bodyHtml: locale.bodyHtml,
      relatedApps: locale.relatedApps || [],
      paths: {
        el: articlePath(slug, 'el'),
        en: articlePath(slug, 'en'),
      },
      siblingAvailable: Boolean(siblingLocale),
    })}</script>
    <script type="module" src="/src/main-article.tsx"></script>
  </body>
</html>`;
}

function buildListingHead(lang, meta) {
  const canonical = `${siteUrl}${listingPath(lang)}`;
  const elUrl = `${siteUrl}/articles`;
  const enUrl = `${siteUrl}/en/articles`;
  const title = meta.title;
  const description = meta.description;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: canonical,
    inLanguage: lang === 'el' ? 'el' : 'en',
    isPartOf: { '@type': 'WebSite', name: 'NexAIpla', url: siteUrl },
  };

  return `<!doctype html>
<html lang="${lang === 'el' ? 'el' : 'en'}">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#f8fafc" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="el" href="${elUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${elUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="NexAIpla" />
    <meta property="og:locale" content="${lang === 'el' ? 'el' : 'en_US'}" />
    <meta property="og:locale:alternate" content="${lang === 'el' ? 'en_US' : 'el'}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${siteUrl}/og-image.svg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${siteUrl}/og-image.svg" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body>
    <div id="root" data-page="articles-listing" data-lang="${lang}"></div>
    <script type="module" src="/src/main-articles.tsx"></script>
  </body>
</html>`;
}

function writeFileEnsuringDir(filePath, content) {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, content, 'utf8');
}

const articlesBySlug = readArticles();
const manifestArticles = [];

for (const [slug, group] of articlesBySlug) {
  const { locales } = group;
  if (!locales.el && !locales.en) continue;

  for (const lang of ['el', 'en']) {
    const locale = locales[lang];
    if (!locale) continue;

    const siblingLocale = locales[lang === 'el' ? 'en' : 'el'];
    const html = buildArticleHead({ locale, siblingLocale, slug });
    const outDir =
      lang === 'en'
        ? resolve(root, 'en/articles', slug)
        : resolve(root, 'articles', slug);
    writeFileEnsuringDir(resolve(outDir, 'index.html'), html);
  }

  const el = locales.el;
  const en = locales.en;
  manifestArticles.push({
    slug,
    date: el?.date || en?.date,
    updated: el?.updated || en?.updated || el?.date || en?.date,
    image: el?.image || en?.image || '/og-image.svg',
    relatedApps: el?.relatedApps || en?.relatedApps || [],
    paths: {
      el: articlePath(slug, 'el'),
      en: articlePath(slug, 'en'),
    },
    titles: {
      el: el?.title || '',
      en: en?.title || '',
    },
    descriptions: {
      el: el?.description || '',
      en: en?.description || '',
    },
    available: {
      el: Boolean(el),
      en: Boolean(en),
    },
  });
}

manifestArticles.sort((a, b) => (a.date < b.date ? 1 : -1));

const listingMeta = {
  el: {
    title: 'Άρθρα & οδηγοί | NexAIpla',
    description:
      'Οδηγοί και άρθρα για online κρατήσεις, παραγγελίες φαγητού και εφαρμογές επιχειρήσεων στην Κύπρο και Ελλάδα — από την NexAIpla.',
  },
  en: {
    title: 'Articles & guides | NexAIpla',
    description:
      'Guides and articles on online booking, food ordering, and business apps for Cyprus and Greece — from NexAIpla.',
  },
};

writeFileEnsuringDir(resolve(root, 'articles/index.html'), buildListingHead('el', listingMeta.el));
writeFileEnsuringDir(resolve(root, 'en/articles/index.html'), buildListingHead('en', listingMeta.en));

const manifest = {
  generatedAt: new Date().toISOString(),
  listing: {
    el: '/articles',
    en: '/en/articles',
  },
  listingMeta,
  appHrefs: APP_HREFS,
  articles: manifestArticles,
};

mkdirSync(manifestDir, { recursive: true });
writeFileSync(resolve(manifestDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

const viteInputs = {
  articles: 'articles/index.html',
  'articles-en': 'en/articles/index.html',
};
for (const article of manifestArticles) {
  if (article.available.el) {
    viteInputs[`article-${article.slug}-el`] = `articles/${article.slug}/index.html`;
  }
  if (article.available.en) {
    viteInputs[`article-${article.slug}-en`] = `en/articles/${article.slug}/index.html`;
  }
}
writeFileSync(resolve(manifestDir, 'vite-inputs.json'), JSON.stringify(viteInputs, null, 2), 'utf8');

console.log(
  `Generated ${manifestArticles.length} article(s), listing pages, manifest → src/articles/generated/`,
);
