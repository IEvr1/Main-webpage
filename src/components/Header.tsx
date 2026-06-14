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
        <LanguageSwitcher lang={lang} onLangChange={onLangChange} />
      </div>
    </header>
  );
}
