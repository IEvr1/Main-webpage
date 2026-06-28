declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
let initialized = false;

function hasAnalytics(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}

export function initAnalytics(): void {
  if (!hasAnalytics() || initialized || typeof window === 'undefined') {
    return;
  }

  initialized = true;
  window.dataLayer = window.dataLayer ?? [];

  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(path?: string): void {
  if (!hasAnalytics() || typeof window === 'undefined') {
    return;
  }

  initAnalytics();

  const pagePath = path ?? `${window.location.pathname}${window.location.search}`;

  window.gtag?.('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}
