import { useState, type FormEvent } from 'react';
import { CONTACT } from '../constants/contact';
import {
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from '../utils/validation';

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateContactForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent('Επικοινωνία — Booking App');
    const body = encodeURIComponent(
      `Όνομα: ${form.name.trim()}\nEmail: ${form.email.trim()}\nΤηλ: ${form.phone.trim() || '—'}\n\n${form.message.trim()}`,
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Όνομα *</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={errors.name ? 'error' : ''}
          autoComplete="name"
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={errors.email ? 'error' : ''}
          autoComplete="email"
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Τηλέφωνο</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={errors.phone ? 'error' : ''}
          autoComplete="tel"
        />
        {errors.phone && <span className="form-error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Μήνυμα *</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary">
        Αποστολή μηνύματος
      </button>
    </form>
  );
}
