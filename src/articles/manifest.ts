import type { ArticlesManifest } from './types';
import manifestJson from './generated/manifest.json';

export const articlesManifest = manifestJson as ArticlesManifest;

export function getArticlesForLang(lang: keyof ArticlesManifest['listing']) {
  return articlesManifest.articles.filter((article) => article.available[lang]);
}

/** Product page id → article frontmatter `relatedApps` ids (see AuthoringTool). */
const PRODUCT_RELATED_APP_IDS: Record<string, string[]> = {
  'online-booking': ['online-booking'],
  'food-order': ['food-order'],
  'shop-traffic': ['shop-traffic'],
  'docs-app': ['docs-app'],
  'school-meals': ['school-meals'],
  'ai-consulting': ['custom-apps'],
};

const AI_SCORE_GUIDE_SLUGS = new Set([
  'what-is-ai-readiness',
  'is-my-business-ready-for-ai',
  'calculate-automation-roi',
  'ai-business-readiness-assessment',
  'ai-readiness-score-0-100-meaning',
  'readiness-score-data-stays-in-browser',
  'red-amber-green-readiness-bands',
  'free-18-question-ai-readiness-score',
]);

function articleMatchesProduct(
  article: ArticlesManifest['articles'][number],
  productAppId: string,
): boolean {
  if (productAppId === 'ai-score') {
    return AI_SCORE_GUIDE_SLUGS.has(article.slug);
  }
  const matchIds = PRODUCT_RELATED_APP_IDS[productAppId];
  if (!matchIds?.length) return false;
  return article.relatedApps.some((id) => matchIds.includes(id));
}

/** Up to `limit` recent guides for a product page (default 5). */
export function getGuidesForProduct(
  productAppId: string,
  lang: keyof ArticlesManifest['listing'],
  limit = 5,
) {
  return articlesManifest.articles
    .filter((article) => article.available[lang] && articleMatchesProduct(article, productAppId))
    .sort((a, b) => (a.updated < b.updated ? 1 : -1))
    .slice(0, limit);
}
