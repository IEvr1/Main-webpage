/** Demo origin for the Food Order App — set VITE_FOOD_ORDER_DEMO_ORIGIN in .env */
export function getFoodOrderDemoUrl(): string {
  const origin = (
    import.meta.env.VITE_FOOD_ORDER_DEMO_ORIGIN ?? 'https://food-order-demo.vercel.app'
  ).replace(/\/$/, '');
  return `${origin}/chat`;
}
