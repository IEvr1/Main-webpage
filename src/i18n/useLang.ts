import { useEffect, useMemo, useState } from 'react';
import type { Lang } from './types';
import { getLangCookie, getLangFromUrl, resolveLang, t } from './i18n';

type PageMeta = {
  titleKey: string;
  descriptionKey: string;
};

export function useLang(meta?: PageMeta): [Lang, (lang: Lang) => void] {
  const initial = useMemo(
    () => resolveLang(getLangFromUrl(), getLangCookie(), 'el'),
    [],
  );
  const [lang, setLang] = useState<Lang>(initial);

  useEffect(() => {
    document.documentElement.lang = lang === 'el' ? 'el' : 'en';
    if (meta) {
      document.title = t(meta.titleKey, lang);
      const description = document.querySelector('meta[name="description"]');
      if (description) {
        description.setAttribute('content', t(meta.descriptionKey, lang));
      }
    }
  }, [lang, meta?.titleKey, meta?.descriptionKey]);

  return [lang, setLang];
}
