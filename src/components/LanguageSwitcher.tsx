import { useCallback } from 'react';
import type { Lang } from '../i18n/types';
import { setLangCookie, t } from '../i18n/i18n';

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
    <div className="lang-switcher" role="group" aria-label={lang === 'el' ? 'Γλώσσα' : 'Language'}>
      <button
        type="button"
        onClick={() => setLang('el')}
        className={`lang-switcher__btn${lang === 'el' ? ' lang-switcher__btn--active' : ''}`}
        aria-pressed={lang === 'el'}
      >
        {t('lang.el', lang)}
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`lang-switcher__btn${lang === 'en' ? ' lang-switcher__btn--active' : ''}`}
        aria-pressed={lang === 'en'}
      >
        {t('lang.en', lang)}
      </button>
    </div>
  );
}
