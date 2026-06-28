import siteRoutes from './site-routes.json';
import { SITE } from './seo';

export type SiteRoute = {
  path: string;
  priority: number;
  appId?: string;
};

export const SITE_ROUTES = siteRoutes as SiteRoute[];

export function getAppIdForPath(pathname: string): string | undefined {
  const normalized = pathname.replace(/\/$/, '') || '/';
  return SITE_ROUTES.find((route) => route.path === normalized)?.appId;
}

export function getSiteUrl(path: string): string {
  const normalizedPath = path === '/' ? '' : path.replace(/\/$/, '');
  return `${SITE.url}${normalizedPath}`;
}
