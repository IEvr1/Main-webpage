import type { ConsultLang } from '../constants/consult-languages';
import { consultLanguageNativeName } from '../constants/consult-languages';
import type { AiConsultLocaleStrings } from '../i18n/ai-consult-locales';
import { getAiConsultLocale } from '../i18n/ai-consult-locales';

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

function goalLabel(goal: AiGoal, consult: AiConsultLocaleStrings): string {
  const labels: Record<AiGoal, string> = {
    productivity: consult.goalProductivity,
    cost: consult.goalCost,
    sales: consult.goalSales,
  };
  return labels[goal];
}

export function validateAiConsultForm(
  data: AiConsultFormData,
  consultLang: ConsultLang,
  mode: 'write' | 'record',
  hasAudio: boolean,
): AiConsultFormErrors {
  const consult = getAiConsultLocale(consultLang);
  const errors: AiConsultFormErrors = {};

  if (!data.name.trim()) {
    errors.name = consult.nameRequired;
  } else if (data.name.trim().length < 2) {
    errors.name = consult.nameMin;
  }

  if (!data.email.trim()) {
    errors.email = consult.emailRequired;
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = consult.emailInvalid;
  }

  if (data.goals.length === 0) {
    errors.goals = consult.goalsRequired;
  }

  if (mode === 'write') {
    if (!data.description.trim()) {
      errors.description = consult.descriptionRequired;
    } else if (data.description.trim().length < 20) {
      errors.description = consult.descriptionMin;
    }
  } else if (!hasAudio) {
    errors.audio = consult.audioRequired;
  }

  return errors;
}

export function buildAiConsultMessage(
  data: AiConsultFormData,
  consultLang: ConsultLang,
  mode: 'write' | 'record',
  audioDurationSec: number,
): string {
  const consult = getAiConsultLocale(consultLang);
  const lines = [
    '[AI Consultation Request]',
    '',
    `Response language: ${consultLanguageNativeName(consultLang)} (${consultLang})`,
    `Goals: ${data.goals.map((g) => goalLabel(g, consult)).join(', ')}`,
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
    lines.push('(A listen link will be included in the notification email after upload.)');
  }

  return lines.join('\n');
}
