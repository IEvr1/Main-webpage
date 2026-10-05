import type { Lang } from '../i18n/types';
import type { ArticlePageData } from './types';

export function getLangFromPathname(pathname: string): Lang {
  return pathname.startsWith('/en/') ? 'en' : 'el';
}

export function getArticleLangUrls(paths: Record<Lang, string>): Record<Lang, string> {
  return paths;
}

export function readArticlePageData(): ArticlePageData | null {
  const script = document.getElementById('article-data');
  if (!script?.textContent) return null;

  try {
    return JSON.parse(script.textContent) as ArticlePageData;
  } catch {
    return null;
  }
}

export function removeArticlePrerender(): void {
  document.getElementById('article-static')?.remove();
}
