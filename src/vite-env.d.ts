/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_FOOD_ORDER_DEMO_ORIGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
