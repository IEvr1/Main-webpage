import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';
import { CONTACT } from '../constants/contact';
import ContactForm from './ContactForm';

type ContactProps = {
  lang: Lang;
};

export default function Contact({ lang }: ContactProps) {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">
          {t('contact.title', lang)}
        </h2>
        <p className="section-subtitle">{t('contact.subtitle', lang)}</p>

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-info__label">Email</p>
            <a href={`mailto:${CONTACT.email}`} className="contact-info__email">
              {CONTACT.email}
            </a>
            <p className="contact-info__phone">{CONTACT.phone}</p>
          </div>

          <ContactForm lang={lang} />
        </div>
      </div>
    </section>
  );
}
