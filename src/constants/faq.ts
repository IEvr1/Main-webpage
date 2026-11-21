import type { FaqItemDef } from '../components/FaqSection';

export const HOME_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'home.faq.q1', answerKey: 'home.faq.a1' },
  { questionKey: 'home.faq.q2', answerKey: 'home.faq.a2' },
  { questionKey: 'home.faq.q3', answerKey: 'home.faq.a3' },
  { questionKey: 'home.faq.q4', answerKey: 'home.faq.a4' },
];

export const BOOKING_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'booking.faq.q1', answerKey: 'booking.faq.a1' },
  { questionKey: 'booking.faq.q2', answerKey: 'booking.faq.a2' },
  { questionKey: 'booking.faq.q3', answerKey: 'booking.faq.a3' },
  { questionKey: 'booking.faq.q4', answerKey: 'booking.faq.a4' },
];

export const FOODORDER_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'foodorder.faq.q1', answerKey: 'foodorder.faq.a1' },
  { questionKey: 'foodorder.faq.q2', answerKey: 'foodorder.faq.a2' },
  { questionKey: 'foodorder.faq.q3', answerKey: 'foodorder.faq.a3' },
  { questionKey: 'foodorder.faq.q4', answerKey: 'foodorder.faq.a4' },
];

export const SCHOOLMEALS_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'schoolmeals.faq.q1', answerKey: 'schoolmeals.faq.a1' },
  { questionKey: 'schoolmeals.faq.q2', answerKey: 'schoolmeals.faq.a2' },
  { questionKey: 'schoolmeals.faq.q3', answerKey: 'schoolmeals.faq.a3' },
  { questionKey: 'schoolmeals.faq.q4', answerKey: 'schoolmeals.faq.a4' },
];

export const SHOPTRAFFIC_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'waitless.faq.q1', answerKey: 'waitless.faq.a1' },
  { questionKey: 'waitless.faq.q2', answerKey: 'waitless.faq.a2' },
  { questionKey: 'waitless.faq.q3', answerKey: 'waitless.faq.a3' },
  { questionKey: 'waitless.faq.q4', answerKey: 'waitless.faq.a4' },
];

export const AI_SOLUTIONS_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'ai.faq.q1', answerKey: 'ai.faq.a1' },
  { questionKey: 'ai.faq.q2', answerKey: 'ai.faq.a2' },
  { questionKey: 'ai.faq.q3', answerKey: 'ai.faq.a3' },
  { questionKey: 'ai.faq.q4', answerKey: 'ai.faq.a4' },
];

export const DOCSAPP_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'docsapp.faq.q1', answerKey: 'docsapp.faq.a1' },
  { questionKey: 'docsapp.faq.q2', answerKey: 'docsapp.faq.a2' },
  { questionKey: 'docsapp.faq.q3', answerKey: 'docsapp.faq.a3' },
  { questionKey: 'docsapp.faq.q4', answerKey: 'docsapp.faq.a4' },
];

export const AI_SCORE_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'aiscore.faq.q1', answerKey: 'aiscore.faq.a1' },
  { questionKey: 'aiscore.faq.q2', answerKey: 'aiscore.faq.a2' },
  { questionKey: 'aiscore.faq.q3', answerKey: 'aiscore.faq.a3' },
  { questionKey: 'aiscore.faq.q4', answerKey: 'aiscore.faq.a4' },
];

/** Dedicated /faq page — expanded site FAQ for SEO + AI citation. */
export const SITE_FAQ: readonly FaqItemDef[] = [
  { questionKey: 'sitefaq.faq.q1', answerKey: 'sitefaq.faq.a1' },
  { questionKey: 'sitefaq.faq.q2', answerKey: 'sitefaq.faq.a2' },
  { questionKey: 'sitefaq.faq.q3', answerKey: 'sitefaq.faq.a3' },
  { questionKey: 'sitefaq.faq.q4', answerKey: 'sitefaq.faq.a4' },
  { questionKey: 'sitefaq.faq.q5', answerKey: 'sitefaq.faq.a5' },
  { questionKey: 'sitefaq.faq.q6', answerKey: 'sitefaq.faq.a6' },
  { questionKey: 'sitefaq.faq.q7', answerKey: 'sitefaq.faq.a7' },
  { questionKey: 'sitefaq.faq.q8', answerKey: 'sitefaq.faq.a8' },
  { questionKey: 'sitefaq.faq.q9', answerKey: 'sitefaq.faq.a9' },
  { questionKey: 'sitefaq.faq.q10', answerKey: 'sitefaq.faq.a10' },
  { questionKey: 'sitefaq.faq.q11', answerKey: 'sitefaq.faq.a11' },
  { questionKey: 'sitefaq.faq.q12', answerKey: 'sitefaq.faq.a12' },
];

export const SITE_FAQ_PRODUCTS = [
  {
    href: '/onlinebooking',
    titleKey: 'apps.onlineBooking.title',
    descriptionKey: 'apps.onlineBooking.description',
  },
  {
    href: '/foodorder',
    titleKey: 'apps.foodOrder.title',
    descriptionKey: 'apps.foodOrder.description',
  },
  {
    href: '/shoptraffic',
    titleKey: 'apps.shopTraffic.title',
    descriptionKey: 'apps.shopTraffic.description',
  },
  {
    href: '/docsapp',
    titleKey: 'apps.docsApp.title',
    descriptionKey: 'apps.docsApp.description',
  },
  {
    href: '/schoolmeals',
    titleKey: 'apps.schoolMeals.title',
    descriptionKey: 'apps.schoolMeals.description',
  },
  {
    href: '/ai',
    titleKey: 'apps.aiConsulting.title',
    descriptionKey: 'apps.aiConsulting.description',
  },
] as const;
