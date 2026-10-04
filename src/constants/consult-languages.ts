export type ConsultLang =
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
  | 'he'
  | 'hu'
  | 'ga'
  | 'it'
  | 'lv'
  | 'lt'
  | 'mt'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'es'
  | 'sv';

export type ConsultLanguageOption = {
  code: ConsultLang;
  nativeName: string;
};

export const CONSULT_LANGUAGES: ConsultLanguageOption[] = [
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
  { code: 'he', nativeName: 'עברית' },
  { code: 'hu', nativeName: 'Magyar' },
  { code: 'ga', nativeName: 'Gaeilge' },
  { code: 'it', nativeName: 'Italiano' },
  { code: 'lv', nativeName: 'Latviešu' },
  { code: 'lt', nativeName: 'Lietuvių' },
  { code: 'mt', nativeName: 'Malti' },
  { code: 'pl', nativeName: 'Polski' },
  { code: 'pt', nativeName: 'Português' },
  { code: 'ro', nativeName: 'Română' },
  { code: 'ru', nativeName: 'Русский' },
  { code: 'sk', nativeName: 'Slovenčina' },
  { code: 'sl', nativeName: 'Slovenščina' },
  { code: 'es', nativeName: 'Español' },
  { code: 'sv', nativeName: 'Svenska' },
];

export function isConsultLang(value: string): value is ConsultLang {
  return CONSULT_LANGUAGES.some((lang) => lang.code === value);
}

export function consultLanguageNativeName(code: ConsultLang): string {
  return CONSULT_LANGUAGES.find((lang) => lang.code === code)?.nativeName ?? code;
}
