import { useEffect, useState, type FormEvent } from 'react';
import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import {
  CONSULT_LANGUAGES,
  type ConsultLang,
  isConsultLang,
} from '../../constants/consult-languages';
import { CONTACT } from '../../constants/contact';
import { getAiConsultLocale } from '../../i18n/ai-consult-locales';
import {
  buildAiConsultMessage,
  validateAiConsultForm,
  type AiConsultFormData,
  type AiConsultFormErrors,
  type AiGoal,
} from '../../utils/ai-consult-validation';

const GOALS: AiGoal[] = ['productivity', 'cost', 'sales'];

function defaultConsultLang(pageLang: Lang): ConsultLang {
  return pageLang === 'el' ? 'el' : 'en';
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: AiConsultFormData = {
  name: '',
  email: '',
  company: '',
  industry: '',
  teamSize: '',
  goals: [],
  description: '',
  timeline: '',
};

type AiConsultFormProps = {
  lang: Lang;
};

export default function AiConsultForm({ lang }: AiConsultFormProps) {
  const [form, setForm] = useState<AiConsultFormData>(initialForm);
  const [errors, setErrors] = useState<AiConsultFormErrors>({});
  const [consultLang, setConsultLang] = useState<ConsultLang>(() => defaultConsultLang(lang));
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState('');

  const consult = getAiConsultLocale(consultLang);

  useEffect(() => {
    setConsultLang(defaultConsultLang(lang));
  }, [lang]);

  function handleChange<K extends keyof AiConsultFormData>(field: K, value: AiConsultFormData[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === 'success') setStatus('idle');
  }

  function toggleGoal(goal: AiGoal) {
    setForm((prev) => {
      const goals = prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal];
      return { ...prev, goals };
    });
    if (errors.goals) setErrors((prev) => ({ ...prev, goals: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateAiConsultForm(form, consultLang);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const botcheck = formData.get('botcheck');
    if (typeof botcheck === 'string' && botcheck.trim()) {
      setForm(initialForm);
      setStatus('success');
      return;
    }

    const message = buildAiConsultMessage(form, consultLang);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: '',
          message,
          botcheck,
          sourcePage: '/ai',
          lang,
          inquiryType: 'ai-consultation',
          company: form.company.trim(),
          industry: form.industry.trim(),
          teamSize: form.teamSize,
          goals: form.goals,
          timeline: form.timeline,
          inputMode: 'write',
          responseLanguage: consultLang,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        success?: boolean;
      };

      if (response.ok && data.success) {
        setForm(initialForm);
        setStatus('success');
        return;
      }

      setStatus('error');
      setSubmitError(t('ai.consult.form.errorGeneric', lang));
    } catch {
      setStatus('error');
      setSubmitError(t('ai.consult.form.errorGeneric', lang));
    }
  }

  return (
    <form className="ai-consult-form contact-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="botcheck"
        className="contact-form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-group">
        <label htmlFor="ai-response-language">{consult.responseLanguage}</label>
        <select
          id="ai-response-language"
          className="ai-consult-form__language-select"
          value={consultLang}
          onChange={(e) => {
            const value = e.target.value;
            if (isConsultLang(value)) setConsultLang(value);
          }}
          disabled={status === 'submitting'}
        >
          {CONSULT_LANGUAGES.map((option) => (
            <option key={option.code} value={option.code}>
              {option.nativeName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="ai-name">{consult.name}</label>
        <input
          id="ai-name"
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
        <label htmlFor="ai-email">{consult.email}</label>
        <input
          id="ai-email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={errors.email ? 'error' : ''}
          autoComplete="email"
          disabled={status === 'submitting'}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="ai-consult-form__row">
        <div className="form-group">
          <label htmlFor="ai-company">{consult.company}</label>
          <input
            id="ai-company"
            type="text"
            value={form.company}
            onChange={(e) => handleChange('company', e.target.value)}
            autoComplete="organization"
            disabled={status === 'submitting'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ai-industry">{consult.industry}</label>
          <input
            id="ai-industry"
            type="text"
            value={form.industry}
            onChange={(e) => handleChange('industry', e.target.value)}
            placeholder={consult.industryPlaceholder}
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <fieldset className="ai-consult-form__goals">
        <legend>{consult.goalsLegend}</legend>
        <div className="ai-consult-form__goals-grid">
          {GOALS.map((goal) => (
            <label key={goal} className="ai-consult-form__goal">
              <input
                type="checkbox"
                checked={form.goals.includes(goal)}
                onChange={() => toggleGoal(goal)}
                disabled={status === 'submitting'}
              />
              <span>
                {{
                  productivity: consult.goalProductivity,
                  cost: consult.goalCost,
                  sales: consult.goalSales,
                }[goal]}
              </span>
            </label>
          ))}
        </div>
        {errors.goals && <span className="form-error">{errors.goals}</span>}
      </fieldset>

      <div className="form-group">
        <label htmlFor="ai-description">{consult.description}</label>
        <textarea
          id="ai-description"
          value={form.description}
          onChange={(e) => handleChange('description', e.target.value)}
          className={errors.description ? 'error' : ''}
          placeholder={consult.descriptionPlaceholder}
          disabled={status === 'submitting'}
        />
        {errors.description && <span className="form-error">{errors.description}</span>}
      </div>

      <div className="ai-consult-form__row">
        <div className="form-group">
          <label htmlFor="ai-team-size">{consult.teamSize}</label>
          <select
            id="ai-team-size"
            value={form.teamSize}
            onChange={(e) => handleChange('teamSize', e.target.value)}
            disabled={status === 'submitting'}
          >
            <option value="">{consult.teamSizeDefault}</option>
            <option value="1-5">{consult.teamSize1}</option>
            <option value="6-20">{consult.teamSize2}</option>
            <option value="21-50">{consult.teamSize3}</option>
            <option value="50+">{consult.teamSize4}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ai-timeline">{consult.timeline}</label>
          <select
            id="ai-timeline"
            value={form.timeline}
            onChange={(e) => handleChange('timeline', e.target.value)}
            disabled={status === 'submitting'}
          >
            <option value="">{consult.timelineDefault}</option>
            <option value="asap">{consult.timelineAsap}</option>
            <option value="1-3months">{consult.timeline1}</option>
            <option value="3-6months">{consult.timeline2}</option>
            <option value="exploring">{consult.timeline3}</option>
          </select>
        </div>
      </div>

      {status === 'success' && (
        <p className="form-status form-status--success" role="status">
          {consult.success}
        </p>
      )}

      {status === 'error' && submitError && (
        <p className="form-status form-status--error" role="alert">
          {submitError}{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? consult.submitting : consult.submit}
      </button>

      <p className="form-note">{consult.note}</p>
    </form>
  );
}
