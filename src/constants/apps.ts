export type AppStatus = 'active' | 'coming-soon';

export type CompanyApp = {
  id: string;
  title: string;
  description: string;
  href: string;
  status: AppStatus;
  tag?: string;
};

export const COMPANY_APPS: CompanyApp[] = [
  {
    id: 'online-booking',
    title: 'Online Κρατήσεις Κομμωτηρίου',
    description:
      'Κρατήσεις μέσω chat με SMS επιβεβαίωση. QR code, επιλογή υπηρεσίας και τεχνικού, dashboard και Google Calendar.',
    href: '/onlinebooking/',
    status: 'active',
    tag: 'Κομμωτήρια',
  },
  {
    id: 'shop-traffic',
    title: 'Waitless',
    description:
      'Ζωντανή εικόνα του καταστήματος — δείχνει στους πελάτες πόσο γεμάτο είναι το κουρείο ή το κομμωτήριο, χωρίς κλείσιμο ραντεβού.',
    href: 'https://www.nexaipla.com/shoptraffic',
    status: 'active',
    tag: 'Κουρεία & Κομμωτήρια',
  },
];
