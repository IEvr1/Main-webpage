import type { ArticlesManifest } from './types';
import manifestJson from './generated/manifest.json';

export const articlesManifest = manifestJson as ArticlesManifest;

export function getArticlesForLang(lang: keyof ArticlesManifest['listing']) {
  return articlesManifest.articles.filter((article) => article.available[lang]);
}
