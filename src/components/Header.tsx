import { BRAND, brandLogoUrl } from '../constants/contact';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="/" className="site-header__brand" aria-label={`${BRAND.name} — αρχική σελίδα`}>
          <img src={brandLogoUrl} alt={BRAND.name} className="site-header__logo" />
        </a>
      </div>
    </header>
  );
}
