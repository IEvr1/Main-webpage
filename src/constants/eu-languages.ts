export type EuConsultLang =
  | 'bg'
  | 'hr'
  | 'cs'
  | 'da'
  | 'nl'
  | 'en'
  | 'et'
  | 'fi'
  | 'fr'
  | 'de'
  | 'el'
  | 'hu'
  | 'ga'
  | 'it'
  | 'lv'
  | 'lt'
  | 'mt'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'sk'
  | 'sl'
  | 'es'
  | 'sv';

export type EuLanguageOption = {
  code: EuConsultLang;
  nativeName: string;
};

/** 24 official EU languages, sorted by English name for the dropdown. */
export const EU_CONSULT_LANGUAGES: EuLanguageOption[] = [
  { code: 'bg', nativeName: 'Български' },
  { code: 'hr', nativeName: 'Hrvatski' },
  { code: 'cs', nativeName: 'Čeština' },
  { code: 'da', nativeName: 'Dansk' },
  { code: 'nl', nativeName: 'Nederlands' },
  { code: 'en', nativeName: 'English' },
  { code: 'et', nativeName: 'Eesti' },
  { code: 'fi', nativeName: 'Suomi' },
  { code: 'fr', nativeName: 'Français' },
  { code: 'de', nativeName: 'Deutsch' },
  { code: 'el', nativeName: 'Ελληνικά' },
  { code: 'hu', nativeName: 'Magyar' },
  { code: 'ga', nativeName: 'Gaeilge' },
  { code: 'it', nativeName: 'Italiano' },
  { code: 'lv', nativeName: 'Latviešu' },
  { code: 'lt', nativeName: 'Lietuvių' },
  { code: 'mt', nativeName: 'Malti' },
  { code: 'pl', nativeName: 'Polski' },
  { code: 'pt', nativeName: 'Português' },
  { code: 'ro', nativeName: 'Română' },
  { code: 'sk', nativeName: 'Slovenčina' },
  { code: 'sl', nativeName: 'Slovenščina' },
  { code: 'es', nativeName: 'Español' },
  { code: 'sv', nativeName: 'Svenska' },
];

export function isEuConsultLang(value: string): value is EuConsultLang {
  return EU_CONSULT_LANGUAGES.some((lang) => lang.code === value);
}

export function euLanguageNativeName(code: EuConsultLang): string {
  return EU_CONSULT_LANGUAGES.find((lang) => lang.code === code)?.nativeName ?? code;
}
