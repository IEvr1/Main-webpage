export function getDemoShopUrl(): string {
  const origin = (
    import.meta.env.VITE_DASHBOARD_ORIGIN ?? 'https://live-traffic-dashboard.vercel.app'
  ).replace(/\/$/, '');
  const slug = import.meta.env.VITE_DEMO_SHOP_SLUG?.trim() || 'stellas-barber';
  return `${origin}/shop/${encodeURIComponent(slug)}`;
}
