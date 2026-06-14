import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

export type AppStatus = 'active' | 'coming-soon';

export type CompanyApp = {
  id: string;
  title: string;
  description: string;
  href: string;
  status: AppStatus;
  tag?: string;
};

export function getCompanyApps(lang: Lang): CompanyApp[] {
  return [
    {
      id: 'online-booking',
      title: t('apps.onlineBooking.title', lang),
      description: t('apps.onlineBooking.description', lang),
      href: '/onlinebooking/',
      status: 'active',
      tag: t('apps.onlineBooking.tag', lang),
    },
    {
      id: 'shop-traffic',
      title: t('apps.shopTraffic.title', lang),
      description: t('apps.shopTraffic.description', lang),
      href: '/shoptraffic/',
      status: 'active',
      tag: t('apps.shopTraffic.tag', lang),
    },
  ];
}
