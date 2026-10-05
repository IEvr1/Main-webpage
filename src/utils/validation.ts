import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

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

  if (!data.message.trim()) {
    errors.message = t('contact.validation.messageRequired', lang);
  } else if (data.message.trim().length < 10) {
    errors.message = t('contact.validation.messageMin', lang);
  }

  return errors;
}
