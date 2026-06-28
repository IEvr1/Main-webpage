import { useState, type FormEvent } from 'react';
import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';
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

type ContactFormProps = {
  lang: Lang;
};

function openMailto(form: ContactFormData, lang: Lang) {
  const subject = encodeURIComponent(t('contact.form.mailtoSubject', lang));
  const body = encodeURIComponent(
    `${t('contact.form.mailtoName', lang)}: ${form.name.trim()}\nEmail: ${form.email.trim()}\n${t('contact.form.mailtoPhone', lang)}: ${form.phone.trim() || '—'}\n\n${form.message.trim()}`,
  );

  window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
}

export default function ContactForm({ lang }: ContactFormProps) {
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
    const validationErrors = validateContactForm(form, lang);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    try {
      const formData = new FormData(e.currentTarget);
      const botcheck = formData.get('botcheck');

      if (typeof botcheck === 'string' && botcheck.trim()) {
        setForm(initialForm);
        setStatus('success');
        return;
      }

      const payload = {
        ...form,
        botcheck,
        sourcePage: window.location.pathname,
        lang,
      };

      const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
      let emailSent = false;

      if (web3Key) {
        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: 'Επικοινωνία — NexAI',
            from_name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim() || '—',
            message: form.message.trim(),
            replyto: form.email.trim(),
          }),
        });

        const web3Data = (await web3Response.json().catch(() => ({}))) as { success?: boolean };
        emailSent = web3Response.ok && Boolean(web3Data.success);
      }

      if (!emailSent && !web3Key) {
        openMailto(form, lang);
        setStatus('idle');
        return;
      }

      if (!emailSent) {
        setStatus('error');
        setSubmitError(t('contact.form.errorGeneric', lang));
        return;
      }

      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        // Zoho sync is best-effort; email already sent via Web3Forms.
      }

      setForm(initialForm);
      setStatus('success');
    } catch {
      openMailto(form, lang);
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
        <label htmlFor="name">{t('contact.form.name', lang)}</label>
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
        <label htmlFor="email">{t('contact.form.email', lang)}</label>
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
        <label htmlFor="phone">{t('contact.form.phone', lang)}</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={errors.phone ? 'error' : ''}
          autoComplete="tel"
          inputMode="tel"
          disabled={status === 'submitting'}
        />
        {errors.phone && <span className="form-error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">{t('contact.form.message', lang)}</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={errors.message ? 'error' : ''}
          placeholder={t('contact.form.messagePlaceholder', lang)}
          disabled={status === 'submitting'}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      {status === 'success' && (
        <p className="form-status form-status--success" role="status">
          {t('contact.form.success', lang)}
        </p>
      )}

      {status === 'error' && submitError && (
        <p className="form-status form-status--error" role="alert">
          {submitError}{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting'
          ? t('contact.form.submitting', lang)
          : t('contact.form.submit', lang)}
      </button>

      <p className="form-note">{t('contact.form.note', lang)}</p>
    </form>
  );
}
