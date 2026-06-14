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
    title: 'Online Γραφέας Ραντεβού 24/7',
    description:
      'Chat, QR code και SMS επιβεβαίωση. Για επιχειρήσεις με ραντεβού — κομμωτήρια, κλινικές, ιατρεία, spa, γυμναστήρια, συνεργεία και άλλα.',
    href: '/onlinebooking/',
    status: 'active',
    tag: 'Ραντεβού & κρατήσεις',
  },
  {
    id: 'shop-traffic',
    title: 'Live Business Traffic',
    description:
      'Ζωντανή εικόνα της κίνησης — δείχνει στους πελάτες πόσο γεμάτο είναι το κατάστημα τώρα, χωρίς ραντεβού. Για κουρεία, κομμωτήρια, φαρμακεία, καφέ και άλλα walk-in καταστήματα.',
    href: '/shoptraffic/',
    status: 'active',
    tag: 'Ζωντανή κίνηση',
  },
];
