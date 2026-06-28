import { initAnalytics, trackPageView } from './utils/analytics';

export function initApp(): void {
  initAnalytics();
  trackPageView();
}
