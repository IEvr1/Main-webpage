import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const siteUrl = 'https://www.nexaipla.com';
const routes = JSON.parse(
  readFileSync(resolve(root, 'src/constants/site-routes.json'), 'utf8'),
);

const manifestPath = resolve(root, 'src/articles/generated/manifest.json');
const articleManifest = existsSync(manifestPath)
  ? JSON.parse(readFileSync(manifestPath, 'utf8'))
  : { articles: [], listing: { el: '/articles', en: '/en/articles' } };

const today = new Date().toISOString().slice(0, 10);

function buildUrlEntry({
  loc,
  lastmod,
  priority,
  elHref,
  enHref,
  useQueryLang = true,
  defaultLang = 'en',
}) {
  let elUrl = elHref;
  let enUrl = enHref;

  if (useQueryLang) {
    if (defaultLang === 'en') {
      enUrl = loc;
      elUrl = loc === `${siteUrl}/` ? `${siteUrl}/?lang=el` : `${loc}?lang=el`;
    } else {
      elUrl = elHref;
      enUrl = loc === `${siteUrl}/` ? `${siteUrl}/?lang=en` : `${loc}?lang=en`;
    }
  }

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority.toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="el" href="${elUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
  </url>`;
}

const productUrls = routes.map((route) => {
  const loc = `${siteUrl}${route.path === '/' ? '/' : route.path}`;
  const elHref = loc;
  return buildUrlEntry({
    loc,
    lastmod: today,
    priority: route.priority,
    elHref,
    useQueryLang: true,
    defaultLang: 'en',
  });
});

const articleListingUrls = [
  buildUrlEntry({
    loc: `${siteUrl}${articleManifest.listing.en}`,
    lastmod: today,
    priority: 0.7,
    elHref: `${siteUrl}${articleManifest.listing.el}`,
    enHref: `${siteUrl}${articleManifest.listing.en}`,
    useQueryLang: false,
  }),
];

const articleUrls = (articleManifest.articles || []).flatMap((article) => {
  const elPath = article.paths?.el;
  const enPath = article.paths?.en;
  if (!elPath && !enPath) return [];

  const primaryPath = enPath || elPath;
  return [
    buildUrlEntry({
      loc: `${siteUrl}${primaryPath}`,
      lastmod: article.updated || article.date || today,
      priority: 0.6,
      elHref: `${siteUrl}${elPath || primaryPath}`,
      enHref: `${siteUrl}${enPath || primaryPath}`,
      useQueryLang: false,
    }),
  ];
});

const urls = [...productUrls, ...articleListingUrls, ...articleUrls].join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

const outputPath = resolve(root, 'public/sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf8');

const totalUrls = routes.length + 1 + (articleManifest.articles?.length || 0);
console.log(`Generated sitemap with ${totalUrls} URLs (${today}) → public/sitemap.xml`);
