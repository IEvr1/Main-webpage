import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Lang } from './types';
import { t } from './i18n';
import { getLangFromPathname } from '../articles/article-data';

type PageMeta = {
  titleKey: string;
  descriptionKey: string;
};

export function usePathLang(meta?: PageMeta): [Lang, (lang: Lang) => void] {
  const initial = useMemo(() => getLangFromPathname(window.location.pathname), []);
  const [lang, setLangState] = useState<Lang>(initial);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'el' ? 'el' : 'en';
    if (meta) {
      const title = t(meta.titleKey, lang);
      const descriptionText = t(meta.descriptionKey, lang);
      document.title = title;

      const description = document.querySelector('meta[name="description"]');
      if (description) description.setAttribute('content', descriptionText);

      for (const selector of [
        'meta[property="og:title"]',
        'meta[name="twitter:title"]',
      ]) {
        const tag = document.querySelector(selector);
        if (tag) tag.setAttribute('content', title);
      }

      for (const selector of [
        'meta[property="og:description"]',
        'meta[name="twitter:description"]',
      ]) {
        const tag = document.querySelector(selector);
        if (tag) tag.setAttribute('content', descriptionText);
      }

      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) ogLocale.setAttribute('content', lang === 'el' ? 'el' : 'en_US');
    }
  }, [lang, meta?.titleKey, meta?.descriptionKey]);

  return [lang, setLang];
}
