import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

export type AiGoal = 'productivity' | 'cost' | 'sales';

export type AiConsultFormData = {
  name: string;
  email: string;
  company: string;
  industry: string;
  teamSize: string;
  goals: AiGoal[];
  description: string;
  timeline: string;
};

export type AiConsultFormErrors = Partial<
  Record<keyof AiConsultFormData | 'audio', string>
>;

function goalLabel(goal: AiGoal, lang: Lang): string {
  return t(`ai.consult.form.goal.${goal}`, lang);
}

export function validateAiConsultForm(
  data: AiConsultFormData,
  lang: Lang,
  mode: 'write' | 'record',
  hasAudio: boolean,
): AiConsultFormErrors {
  const errors: AiConsultFormErrors = {};

  if (!data.name.trim()) {
    errors.name = t('ai.consult.validation.nameRequired', lang);
  } else if (data.name.trim().length < 2) {
    errors.name = t('ai.consult.validation.nameMin', lang);
  }

  if (!data.email.trim()) {
    errors.email = t('ai.consult.validation.emailRequired', lang);
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = t('ai.consult.validation.emailInvalid', lang);
  }

  if (data.goals.length === 0) {
    errors.goals = t('ai.consult.validation.goalsRequired', lang);
  }

  if (mode === 'write') {
    if (!data.description.trim()) {
      errors.description = t('ai.consult.validation.descriptionRequired', lang);
    } else if (data.description.trim().length < 20) {
      errors.description = t('ai.consult.validation.descriptionMin', lang);
    }
  } else if (!hasAudio) {
    errors.audio = t('ai.consult.validation.audioRequired', lang);
  }

  return errors;
}

export function buildAiConsultMessage(
  data: AiConsultFormData,
  lang: Lang,
  mode: 'write' | 'record',
  audioDurationSec: number,
): string {
  const lines = [
    '[AI Consultation Request]',
    '',
    `Goals: ${data.goals.map((g) => goalLabel(g, lang)).join(', ')}`,
  ];

  if (data.company.trim()) lines.push(`Company: ${data.company.trim()}`);
  if (data.industry.trim()) lines.push(`Industry: ${data.industry.trim()}`);
  if (data.teamSize) lines.push(`Team size: ${data.teamSize}`);
  if (data.timeline) lines.push(`Timeline: ${data.timeline}`);

  lines.push(`Input mode: ${mode === 'write' ? 'Written' : 'Voice recording'}`);

  if (mode === 'write') {
    lines.push('', 'Business needs:', data.description.trim());
  } else {
    lines.push('', `Voice recording: ${audioDurationSec}s`);
    lines.push('(Audio attached via inquiry payload)');
  }

  return lines.join('\n');
}
