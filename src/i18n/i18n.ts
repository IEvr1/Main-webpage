import type { Lang } from './types';
import el from './el.json';
import en from './en.json';

const dict: Record<Lang, Record<string, string>> = {
  el: el as Record<string, string>,
  en: en as Record<string, string>,
};

export function resolveLang(
  query: string | null | undefined,
  cookie: string | null | undefined,
  fallback: Lang,
): Lang {
  if (query === 'en' || query === 'el') return query;
  if (cookie === 'en' || cookie === 'el') return cookie;
  return fallback;
}

export function t(
  key: string,
  lang: Lang,
  vars?: Record<string, string | number | undefined>,
): string {
  const table = dict[lang] ?? dict.el;
  let s = table[key] ?? dict.en[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      if (v === undefined) continue;
      s = s.replaceAll(`{${k}}`, String(v));
    }
  }
  return s;
}

export function getLangCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
  return match?.[1] ?? null;
}

export function setLangCookie(lang: Lang): void {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `lang=${lang};path=/;max-age=${maxAge};SameSite=Lax`;
}

export function getLangFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get('lang');
}
