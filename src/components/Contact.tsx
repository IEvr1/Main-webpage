import { CONTACT } from '../constants/contact';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">
          Επικοινωνία
        </h2>
        <p className="section-subtitle">
          Θέλετε demo ή έχετε ερώτηση; Στείλτε μας μήνυμα — θα απαντήσουμε εντός 24 ωρών.
        </p>

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-info__label">Email</p>
            <a href={`mailto:${CONTACT.email}`} className="contact-info__email">
              {CONTACT.email}
            </a>
            <p className="contact-info__phone">{CONTACT.phone}</p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
