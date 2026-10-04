import { useEffect, useRef, useState, type FormEvent } from 'react';
import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import { CONTACT } from '../../constants/contact';
import {
  buildAiConsultMessage,
  validateAiConsultForm,
  type AiConsultFormData,
  type AiConsultFormErrors,
  type AiGoal,
} from '../../utils/ai-consult-validation';

const MAX_RECORDING_SEC = 180;
const GOALS: AiGoal[] = ['productivity', 'cost', 'sales'];

const PROMPT_KEYS = [
  'ai.consult.prompts.p1',
  'ai.consult.prompts.p2',
  'ai.consult.prompts.p3',
  'ai.consult.prompts.p4',
] as const;

type InputMode = 'write' | 'record';

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

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error('Failed to encode audio'));
        return;
      }
      const base64 = result.split(',')[1];
      if (!base64) {
        reject(new Error('Failed to encode audio'));
        return;
      }
      resolve(base64);
    };
    reader.onerror = () => reject(reader.error ?? new Error('Failed to encode audio'));
    reader.readAsDataURL(blob);
  });
}

type AiConsultFormProps = {
  lang: Lang;
};

export default function AiConsultForm({ lang }: AiConsultFormProps) {
  const [form, setForm] = useState<AiConsultFormData>(initialForm);
  const [errors, setErrors] = useState<AiConsultFormErrors>({});
  const [mode, setMode] = useState<InputMode>('write');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState('');

  const [isRecording, setIsRecording] = useState(false);
  const [recordingSec, setRecordingSec] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [micDenied, setMicDenied] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const timerRef = useRef<number | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
      mediaRecorderRef.current?.stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

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

  function clearRecording() {
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    setAudioBlob(null);
    setAudioUrl(null);
    setRecordingSec(0);
    setMicDenied(false);
  }

  function stopRecording() {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  }

  async function startRecording() {
    setMicDenied(false);
    clearRecording();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/webm';

      const recorder = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        const blob = new Blob(chunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
        setAudioBlob(blob);
        setAudioUrl(url);
        mediaRecorderRef.current = null;
      };

      mediaRecorderRef.current = recorder;
      recorder.start(250);
      setIsRecording(true);
      setRecordingSec(0);

      timerRef.current = window.setInterval(() => {
        setRecordingSec((prev) => {
          if (prev + 1 >= MAX_RECORDING_SEC) {
            stopRecording();
            return MAX_RECORDING_SEC;
          }
          return prev + 1;
        });
      }, 1000);
    } catch {
      setMicDenied(true);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateAiConsultForm(form, lang, mode, Boolean(audioBlob));
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
      clearRecording();
      setStatus('success');
      return;
    }

    const message = buildAiConsultMessage(form, lang, mode, audioBlob ? recordingSec : 0);

    let audioBase64: string | undefined;
    let audioMimeType: string | undefined;
    if (audioBlob) {
      audioBase64 = await blobToBase64(audioBlob);
      audioMimeType = audioBlob.type;
    }

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
          inputMode: mode,
          audioBase64,
          audioMimeType,
          audioDurationSec: audioBlob ? recordingSec : undefined,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        success?: boolean;
      };

      if (response.ok && data.success) {
        setForm(initialForm);
        clearRecording();
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

      <div className="ai-consult-form__mode" role="tablist" aria-label={t('ai.consult.form.modeAria', lang)}>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'write'}
          className={`ai-consult-form__mode-btn${mode === 'write' ? ' ai-consult-form__mode-btn--active' : ''}`}
          onClick={() => setMode('write')}
        >
          {t('ai.consult.form.modeWrite', lang)}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'record'}
          className={`ai-consult-form__mode-btn${mode === 'record' ? ' ai-consult-form__mode-btn--active' : ''}`}
          onClick={() => setMode('record')}
        >
          {t('ai.consult.form.modeRecord', lang)}
        </button>
      </div>

      <div className="form-group">
        <label htmlFor="ai-name">{t('ai.consult.form.name', lang)}</label>
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
        <label htmlFor="ai-email">{t('ai.consult.form.email', lang)}</label>
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
          <label htmlFor="ai-company">{t('ai.consult.form.company', lang)}</label>
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
          <label htmlFor="ai-industry">{t('ai.consult.form.industry', lang)}</label>
          <input
            id="ai-industry"
            type="text"
            value={form.industry}
            onChange={(e) => handleChange('industry', e.target.value)}
            placeholder={t('ai.consult.form.industryPlaceholder', lang)}
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <fieldset className="ai-consult-form__goals">
        <legend>{t('ai.consult.form.goalsLegend', lang)}</legend>
        <div className="ai-consult-form__goals-grid">
          {GOALS.map((goal) => (
            <label key={goal} className="ai-consult-form__goal">
              <input
                type="checkbox"
                checked={form.goals.includes(goal)}
                onChange={() => toggleGoal(goal)}
                disabled={status === 'submitting'}
              />
              <span>{t(`ai.consult.form.goal.${goal}`, lang)}</span>
            </label>
          ))}
        </div>
        {errors.goals && <span className="form-error">{errors.goals}</span>}
      </fieldset>

      {mode === 'write' ? (
        <>
          <div className="form-group">
            <label htmlFor="ai-description">{t('ai.consult.form.description', lang)}</label>
            <textarea
              id="ai-description"
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className={errors.description ? 'error' : ''}
              placeholder={t('ai.consult.form.descriptionPlaceholder', lang)}
              disabled={status === 'submitting'}
            />
            {errors.description && <span className="form-error">{errors.description}</span>}
          </div>
          <div className="ai-consult-form__row">
            <div className="form-group">
              <label htmlFor="ai-team-size">{t('ai.consult.form.teamSize', lang)}</label>
              <select
                id="ai-team-size"
                value={form.teamSize}
                onChange={(e) => handleChange('teamSize', e.target.value)}
                disabled={status === 'submitting'}
              >
                <option value="">{t('ai.consult.form.teamSizeDefault', lang)}</option>
                <option value="1-5">{t('ai.consult.form.teamSize1', lang)}</option>
                <option value="6-20">{t('ai.consult.form.teamSize2', lang)}</option>
                <option value="21-50">{t('ai.consult.form.teamSize3', lang)}</option>
                <option value="50+">{t('ai.consult.form.teamSize4', lang)}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ai-timeline">{t('ai.consult.form.timeline', lang)}</label>
              <select
                id="ai-timeline"
                value={form.timeline}
                onChange={(e) => handleChange('timeline', e.target.value)}
                disabled={status === 'submitting'}
              >
                <option value="">{t('ai.consult.form.timelineDefault', lang)}</option>
                <option value="asap">{t('ai.consult.form.timelineAsap', lang)}</option>
                <option value="1-3months">{t('ai.consult.form.timeline1', lang)}</option>
                <option value="3-6months">{t('ai.consult.form.timeline2', lang)}</option>
                <option value="exploring">{t('ai.consult.form.timeline3', lang)}</option>
              </select>
            </div>
          </div>
        </>
      ) : (
        <div className="ai-consult-form__record-panel">
          <div className="ai-consult-form__prompts">
            <h3 className="ai-consult-form__prompts-title">{t('ai.consult.prompts.title', lang)}</h3>
            <ol className="ai-consult-form__prompts-list">
              {PROMPT_KEYS.map((key) => (
                <li key={key}>{t(key, lang)}</li>
              ))}
            </ol>
          </div>

          <div className="ai-consult-form__recorder">
            {micDenied && (
              <p className="form-status form-status--error" role="alert">
                {t('ai.consult.form.micDenied', lang)}
              </p>
            )}

            {audioUrl ? (
              <div className="ai-consult-form__playback">
                <audio controls src={audioUrl} className="ai-consult-form__audio" />
                <p className="ai-consult-form__recording-meta">
                  {t('ai.consult.form.recordingDuration', lang, { duration: formatTime(recordingSec) })}
                </p>
                <button type="button" className="btn btn-secondary" onClick={clearRecording}>
                  {t('ai.consult.form.recordAgain', lang)}
                </button>
              </div>
            ) : (
              <div className="ai-consult-form__record-controls">
                <button
                  type="button"
                  className={`btn ${isRecording ? 'btn-secondary' : 'btn-primary'} ai-consult-form__record-btn`}
                  onClick={isRecording ? stopRecording : startRecording}
                  disabled={status === 'submitting'}
                >
                  {isRecording
                    ? t('ai.consult.form.stopRecording', lang)
                    : t('ai.consult.form.startRecording', lang)}
                </button>
                {isRecording && (
                  <span className="ai-consult-form__recording-live" aria-live="polite">
                    <span className="ai-consult-form__recording-dot" aria-hidden="true" />
                    {formatTime(recordingSec)} / {formatTime(MAX_RECORDING_SEC)}
                  </span>
                )}
              </div>
            )}
            {errors.audio && <span className="form-error">{errors.audio}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="ai-timeline-record">{t('ai.consult.form.timeline', lang)}</label>
            <select
              id="ai-timeline-record"
              value={form.timeline}
              onChange={(e) => handleChange('timeline', e.target.value)}
              disabled={status === 'submitting'}
            >
              <option value="">{t('ai.consult.form.timelineDefault', lang)}</option>
              <option value="asap">{t('ai.consult.form.timelineAsap', lang)}</option>
              <option value="1-3months">{t('ai.consult.form.timeline1', lang)}</option>
              <option value="3-6months">{t('ai.consult.form.timeline2', lang)}</option>
              <option value="exploring">{t('ai.consult.form.timeline3', lang)}</option>
            </select>
          </div>
        </div>
      )}

      {status === 'success' && (
        <p className="form-status form-status--success" role="status">
          {t('ai.consult.form.success', lang)}
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
          ? t('ai.consult.form.submitting', lang)
          : t('ai.consult.form.submit', lang)}
      </button>

      <p className="form-note">{t('ai.consult.form.note', lang)}</p>
    </form>
  );
}
