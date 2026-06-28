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

assert(existsSync(resolve(root, 'public/robots.txt')), 'Missing public/robots.txt');
const robots = read('public/robots.txt');
assert(/Sitemap:\s*https:\/\/www\.nexaipla\.com\/sitemap\.xml/i.test(robots), 'robots.txt missing sitemap pointer');

assert(existsSync(resolve(root, 'public/sitemap.xml')), 'Missing public/sitemap.xml — run npm run prebuild');
const sitemap = read('public/sitemap.xml');

for (const route of routes) {
  const loc = route.path === '/' ? 'https://www.nexaipla.com/' : `https://www.nexaipla.com${route.path}`;
  assert(sitemap.includes(`<loc>${loc}</loc>`), `sitemap.xml missing ${loc}`);
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

console.log(`SEO checks passed (${htmlPages.length} pages, ${routes.length} sitemap URLs, ${appRouteCount} product routes).`);
