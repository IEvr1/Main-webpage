/** Demo origin for the School Meals App — set VITE_SCHOOL_MEALS_DEMO_ORIGIN in .env */
export function getSchoolMealsDemoUrl(): string {
  return (
    import.meta.env.VITE_SCHOOL_MEALS_DEMO_ORIGIN ?? 'https://school-meal-plan.vercel.app'
  ).replace(/\/$/, '');
}
