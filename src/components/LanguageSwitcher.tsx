import { useCallback } from 'react';
import type { Lang } from '../i18n/types';
import { setLangCookie, t } from '../i18n/i18n';

export function LanguageSwitcher({
  lang,
  onLangChange,
  langUrls,
}: {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  langUrls?: Partial<Record<Lang, string>>;
}) {
  const setLang = useCallback(
    (next: Lang) => {
      if (langUrls?.[next]) {
        setLangCookie(next);
        window.location.href = langUrls[next]!;
        return;
      }

      setLangCookie(next);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', next);
      window.history.replaceState(null, '', url.toString());
      document.documentElement.lang = next === 'el' ? 'el' : 'en';
      onLangChange(next);
    },
    [onLangChange, langUrls],
  );

  return (
    <div className="lang-switcher" role="group" aria-label={lang === 'el' ? 'Γλώσσα' : 'Language'}>
      <button
        type="button"
        onClick={() => setLang('el')}
        className={`lang-switcher__btn${lang === 'el' ? ' lang-switcher__btn--active' : ''}`}
        aria-pressed={lang === 'el'}
        disabled={langUrls !== undefined && !langUrls.el}
      >
        {t('lang.el', lang)}
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`lang-switcher__btn${lang === 'en' ? ' lang-switcher__btn--active' : ''}`}
        aria-pressed={lang === 'en'}
        disabled={langUrls !== undefined && !langUrls.en}
      >
        {t('lang.en', lang)}
      </button>
    </div>
  );
}
