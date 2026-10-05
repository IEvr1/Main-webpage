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
      id: 'docs-app',
      title: t('apps.docsApp.title', lang),
      description: t('apps.docsApp.description', lang),
      href: '/docsapp/',
      status: 'active',
      tag: t('apps.docsApp.tag', lang),
    },
    {
      id: 'school-meals',
      title: t('apps.schoolMeals.title', lang),
      description: t('apps.schoolMeals.description', lang),
      href: '/schoolmeals/',
      status: 'active',
      tag: t('apps.schoolMeals.tag', lang),
    },
    {
      id: 'ai-score',
      title: t('apps.aiScore.title', lang),
      description: t('apps.aiScore.description', lang),
      href: '/ai-score/',
      status: 'active',
      tag: t('apps.aiScore.tag', lang),
    },
    {
      id: 'ai-consulting',
      title: t('apps.aiConsulting.title', lang),
      description: t('apps.aiConsulting.description', lang),
      href: '/ai/',
      status: 'active',
      tag: t('apps.aiConsulting.tag', lang),
    },
  ];
}
