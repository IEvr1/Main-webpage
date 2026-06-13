export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s+\-()]{6,20}$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Το όνομα είναι υποχρεωτικό.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες.';
  }

  if (!data.email.trim()) {
    errors.email = 'Το email είναι υποχρεωτικό.';
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = 'Εισάγετε έγκυρη διεύθυνση email.';
  }

  if (data.phone.trim() && !PHONE_PATTERN.test(data.phone.trim())) {
    errors.phone = 'Εισάγετε έγκυρο αριθμό τηλεφώνου.';
  }

  if (!data.message.trim()) {
    errors.message = 'Το μήνυμα είναι υποχρεωτικό.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες.';
  }

  return errors;
}
