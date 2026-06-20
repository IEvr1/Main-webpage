import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

export type AppStatus = 'active' | 'coming-soon' | 'custom';

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
      id: 'food-order',
      title: t('apps.foodOrder.title', lang),
      description: t('apps.foodOrder.description', lang),
      href: '/foodorder/',
      status: 'active',
      tag: t('apps.foodOrder.tag', lang),
    },
    {
      id: 'shop-traffic',
      title: t('apps.shopTraffic.title', lang),
      description: t('apps.shopTraffic.description', lang),
      href: '/shoptraffic/',
      status: 'active',
      tag: t('apps.shopTraffic.tag', lang),
    },
    {
      id: 'custom-apps',
      title: t('apps.customApps.title', lang),
      description: t('apps.customApps.description', lang),
      href: '#contact',
      status: 'custom',
      tag: t('apps.customApps.tag', lang),
    },
  ];
}
