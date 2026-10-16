import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const errors = [];

function read(path) {
  return readFileSync(resolve(root, path), 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

const routes = JSON.parse(read('src/constants/site-routes.json'));

const htmlPages = [
  'index.html',
  'onlinebooking/index.html',
  'foodorder/index.html',
  'shoptraffic/index.html',
  'docsapp/index.html',
  'custom/index.html',
  'schoolmeals/index.html',
  'articles/index.html',
  'en/articles/index.html',
];

for (const page of htmlPages) {
  const path = resolve(root, page);
  assert(existsSync(path), `Missing HTML page: ${page}`);

  const html = read(page);
  assert(/<title>[^<]+<\/title>/i.test(html), `${page}: missing <title>`);
  assert(/<meta\s+name="description"\s+content="[^"]+"/i.test(html), `${page}: missing meta description`);
  assert(/<link\s+rel="canonical"\s+href="https:\/\/www\.nexaipla\.com/i.test(html), `${page}: missing canonical URL`);
  assert(/<meta\s+name="robots"\s+content="index,\s*follow"/i.test(html), `${page}: missing indexable robots meta`);
}

const manifestPath = resolve(root, 'src/articles/generated/manifest.json');
if (existsSync(manifestPath)) {
  const manifest = JSON.parse(read('src/articles/generated/manifest.json'));

  for (const article of manifest.articles || []) {
    for (const lang of ['el', 'en']) {
      if (!article.available?.[lang]) continue;

      const relPath =
        lang === 'en'
          ? `en/articles/${article.slug}/index.html`
          : `articles/${article.slug}/index.html`;

      assert(existsSync(resolve(root, relPath)), `Missing generated article page: ${relPath}`);

      const html = read(relPath);
      assert(/<title>[^<]+<\/title>/i.test(html), `${relPath}: missing <title>`);
      assert(/<meta\s+name="description"\s+content="[^"]+"/i.test(html), `${relPath}: missing meta description`);
      assert(/<link\s+rel="canonical"\s+href="https:\/\/www\.nexaipla\.com/i.test(html), `${relPath}: missing canonical URL`);
      assert(/<meta\s+property="og:type"\s+content="article"/i.test(html), `${relPath}: missing og:type=article`);
      assert(/"@type"\s*:\s*"BlogPosting"/i.test(html), `${relPath}: missing BlogPosting JSON-LD`);
      assert(/id="article-static"/i.test(html), `${relPath}: missing prerendered article body`);
    }
  }
}

assert(existsSync(resolve(root, 'public/robots.txt')), 'Missing public/robots.txt');
const robots = read('public/robots.txt');
assert(/Sitemap:\s*https:\/\/www\.nexaipla\.com\/sitemap\.xml/i.test(robots), 'robots.txt missing sitemap pointer');

assert(existsSync(resolve(root, 'public/sitemap.xml')), 'Missing public/sitemap.xml — run npm run prebuild');
const sitemap = read('public/sitemap.xml');

for (const route of routes) {
  const loc = route.path === '/' ? 'https://www.nexaipla.com/' : `https://www.nexaipla.com${route.path}`;
  assert(sitemap.includes(`<loc>${loc}</loc>`), `sitemap.xml missing ${loc}`);
}

assert(
  sitemap.includes('<loc>https://www.nexaipla.com/en/articles</loc>'),
  'sitemap.xml missing /en/articles listing',
);

if (existsSync(manifestPath)) {
  const manifest = JSON.parse(read('src/articles/generated/manifest.json'));
  for (const article of manifest.articles || []) {
    const primaryPath = article.paths?.en || article.paths?.el;
    if (primaryPath) {
      assert(
        sitemap.includes(`<loc>https://www.nexaipla.com${primaryPath}</loc>`),
        `sitemap.xml missing ${primaryPath}`,
      );
    }
  }
}

const appRouteCount = routes.filter((route) => route.appId).length;
const relatedAppsFile = read('src/components/RelatedApps.tsx');
assert(relatedAppsFile.includes('RelatedApps'), 'RelatedApps component missing');
assert(relatedAppsFile.includes('getCompanyApps'), 'RelatedApps should link company apps');

if (errors.length > 0) {
  console.error('SEO checks failed:\n');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`SEO checks passed (${htmlPages.length}+ pages, product routes, articles).`);
