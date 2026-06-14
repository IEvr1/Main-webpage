import { useCallback } from 'react';
import type { Lang } from '../types';
import { setLangCookie, t } from '../i18n';

export function LanguageSwitcher({
  lang,
  onLangChange,
}: {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}) {
  const setLang = useCallback(
    (next: Lang) => {
      setLangCookie(next);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', next);
      window.history.replaceState(null, '', url.toString());
      document.documentElement.lang = next === 'el' ? 'el' : 'en';
      onLangChange(next);
    },
    [onLangChange],
  );

  return (
    <div className="flex gap-1 rounded-full border border-border bg-surface-muted/90 p-1 text-sm font-semibold shadow-inner dark:bg-surface-muted/60">
      <button
        type="button"
        onClick={() => setLang('el')}
        className={`rounded-full px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          lang === 'el'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-muted-foreground hover:bg-surface hover:text-foreground'
        }`}
      >
        {t('lang.el', lang)}
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded-full px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          lang === 'en'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-muted-foreground hover:bg-surface hover:text-foreground'
        }`}
      >
        {t('lang.en', lang)}
      </button>
    </div>
  );
}
