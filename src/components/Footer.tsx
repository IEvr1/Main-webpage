import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';
import { articlesManifest } from '../articles/manifest';
import { BRAND, CONTACT, brandLogoUrl } from '../constants/contact';

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a
          href="/"
          className="site-footer__brand"
          aria-label={t('common.homeAria', lang)}
        >
          <img src={brandLogoUrl} alt={BRAND.name} className="site-footer__logo" />
        </a>
        <nav className="site-footer__nav" aria-label={t('articles.nav', lang)}>
          <a href={articlesManifest.listing[lang]}>{t('articles.nav', lang)}</a>
        </nav>
        <p>
          &copy; {new Date().getFullYear()} {BRAND.name}. {t('common.copyright', lang)}
        </p>
        <a href={`mailto:${CONTACT.email}`} className="site-footer__email">
          {CONTACT.email}
        </a>
      </div>
    </footer>
  );
}
