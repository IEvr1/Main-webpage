import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

function normalizePhone(input: string): string {
  return input.replace(/[\s\-().]/g, '');
}

function isValidGreeceCyprusPhone(input: string): boolean {
  let digits = normalizePhone(input);

  if (digits.startsWith('+')) {
    digits = digits.slice(1);
  }

  if (digits.startsWith('00')) {
    digits = digits.slice(2);
  }

  if (digits.startsWith('357')) {
    const national = digits.slice(3);
    return /^[29]\d{7}$/.test(national);
  }

  if (digits.startsWith('30')) {
    const national = digits.slice(2);
    return /^(2\d{9}|69\d{8})$/.test(national);
  }

  if (/^[29]\d{7}$/.test(digits)) {
    return true;
  }

  if (/^(2\d{9}|69\d{8})$/.test(digits)) {
    return true;
  }

  return false;
}

export function validateContactForm(data: ContactFormData, lang: Lang): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = t('contact.validation.nameRequired', lang);
  } else if (data.name.trim().length < 2) {
    errors.name = t('contact.validation.nameMin', lang);
  }

  if (!data.email.trim()) {
    errors.email = t('contact.validation.emailRequired', lang);
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = t('contact.validation.emailInvalid', lang);
  }

  if (data.phone.trim() && !isValidGreeceCyprusPhone(data.phone.trim())) {
    errors.phone = t('contact.validation.phoneInvalid', lang);
  }

  if (!data.message.trim()) {
    errors.message = t('contact.validation.messageRequired', lang);
  } else if (data.message.trim().length < 10) {
    errors.message = t('contact.validation.messageMin', lang);
  }

  return errors;
}
