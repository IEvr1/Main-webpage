import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const siteUrl = 'https://www.nexaipla.com';
const routes = JSON.parse(
  readFileSync(resolve(root, 'src/constants/site-routes.json'), 'utf8'),
);

const today = new Date().toISOString().slice(0, 10);

const urls = routes
  .map((route) => {
    const loc = `${siteUrl}${route.path === '/' ? '/' : route.path}`;
    const elHref = loc;
    const enHref = route.path === '/' ? `${siteUrl}/?lang=en` : `${loc}?lang=en`;

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="el" href="${elHref}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enHref}" />
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

const outputPath = resolve(root, 'public/sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf8');
console.log(`Generated sitemap with ${routes.length} URLs (${today}) → public/sitemap.xml`);
