import { BRAND, CONTACT, brandLogoUrl } from '../constants/contact';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a href="/" className="site-footer__brand" aria-label={`${BRAND.name} — αρχική σελίδα`}>
          <img src={brandLogoUrl} alt={BRAND.name} className="site-footer__logo" />
        </a>
        <p>
          &copy; {new Date().getFullYear()} {BRAND.name}. Όλα τα δικαιώματα διατηρούνται.
        </p>
        <a href={`mailto:${CONTACT.email}`} className="site-footer__email">
          {CONTACT.email}
        </a>
      </div>
    </footer>
  );
}
