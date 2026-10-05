import type { Lang } from '../i18n/types';

export type ArticleManifestEntry = {
  slug: string;
  date: string;
  updated: string;
  image: string;
  relatedApps: string[];
  paths: Record<Lang, string>;
  titles: Record<Lang, string>;
  descriptions: Record<Lang, string>;
  available: Record<Lang, boolean>;
};

export type ArticlesManifest = {
  generatedAt: string;
  listing: Record<Lang, string>;
  listingMeta: Record<Lang, { title: string; description: string }>;
  appHrefs: Record<string, string>;
  articles: ArticleManifestEntry[];
};

export type ArticlePageData = {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  date: string;
  updated: string;
  author: string;
  bodyHtml: string;
  relatedApps: string[];
  paths: Record<Lang, string>;
  siblingAvailable: boolean;
};
