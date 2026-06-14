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

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

function openMailto(form: ContactFormData) {
  const subject = encodeURIComponent('Επικοινωνία — NexAI');
  const body = encodeURIComponent(
    `Όνομα: ${form.name.trim()}\nEmail: ${form.email.trim()}\nΤηλ: ${form.phone.trim() || '—'}\n\n${form.message.trim()}`,
  );

  window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState('');

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === 'success') {
      setStatus('idle');
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validateContactForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    try {
      const formData = new FormData(e.currentTarget);
      const botcheck = formData.get('botcheck');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, botcheck }),
      });

      if (response.ok) {
        setForm(initialForm);
        setStatus('success');
        return;
      }

      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (response.status === 404) {
        openMailto(form);
        setStatus('idle');
        return;
      }

      setStatus('error');
      setSubmitError(
        data.error === 'Email service not configured'
          ? `Η υπηρεσία δεν είναι ρυθμισμένη ακόμα. Στείλτε μας στο ${CONTACT.email}.`
          : 'Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά ή στείλτε email απευθείας.',
      );
    } catch {
      openMailto(form);
      setStatus('idle');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="botcheck"
        className="contact-form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-group">
        <label htmlFor="name">Όνομα *</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={errors.name ? 'error' : ''}
          autoComplete="name"
          disabled={status === 'submitting'}
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
          disabled={status === 'submitting'}
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
          disabled={status === 'submitting'}
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
          disabled={status === 'submitting'}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      {status === 'success' && (
        <p className="form-status form-status--success" role="status">
          Ευχαριστούμε! Το μήνυμά σας στάλθηκε — θα απαντήσουμε εντός 24 ωρών.
        </p>
      )}

      {status === 'error' && submitError && (
        <p className="form-status form-status--error" role="alert">
          {submitError}{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Αποστολή…' : 'Αποστολή μηνύματος'}
      </button>

      <p className="form-note">Θα απαντήσουμε εντός 24 ωρών.</p>
    </form>
  );
}
