import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';
import { BRAND, brandLogoUrl } from '../constants/contact';
import { LanguageSwitcher } from './LanguageSwitcher';

type HeaderProps = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
};

export default function Header({ lang, onLangChange }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          href="/"
          className="site-header__brand"
          aria-label={t('common.homeAria', lang)}
        >
          <img src={brandLogoUrl} alt={BRAND.name} className="site-header__logo" />
        </a>
        <div className="site-header__actions">
          <nav className="site-header__nav" aria-label={t('common.navAria', lang)}>
            <a href="/ai/" className="site-header__nav-link">
              {t('common.navAi', lang)}
            </a>
          </nav>
          <LanguageSwitcher lang={lang} onLangChange={onLangChange} />
        </div>
      </div>
    </header>
  );
}
