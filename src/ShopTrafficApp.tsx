import { brandLogoUrl } from './constants/contact';
import { WaitlessLanding } from './components/shoptraffic/WaitlessLanding';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { getDemoShopUrl } from './shoptraffic/demo-shop-url';
import { t } from './i18n/i18n';
import { useLang } from './i18n/useLang';

const SHOP_TRAFFIC_META = {
  titleKey: 'waitless.metaTitle',
  descriptionKey: 'waitless.metaDescription',
} as const;

export default function ShopTrafficApp() {
  const [lang, setLang] = useLang(SHOP_TRAFFIC_META);
  const demoShopUrl = getDemoShopUrl();

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 lg:px-10">
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-border pb-5">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <a href="/" className="shrink-0 transition opacity-90 hover:opacity-100">
            <img src={brandLogoUrl} alt="NexAIpla" className="h-14 w-auto sm:h-16" />
          </a>
          <div className="min-w-0 border-l border-border pl-3 sm:pl-4">
            <p className="truncate text-base font-bold tracking-tight text-foreground sm:text-xl md:text-2xl">
              {t('app.title', lang)}
            </p>
            <p className="truncate text-xs leading-snug text-muted-foreground sm:text-sm md:text-[0.9375rem]">
              {t('app.tagline', lang)}
            </p>
          </div>
        </div>
        <nav
          aria-label={t('waitless.navAriaPrimary', lang)}
          className="flex shrink-0 items-center gap-3 sm:gap-4"
        >
          <LanguageSwitcher lang={lang} onLangChange={setLang} />
        </nav>
      </header>
      <main className="mt-8 sm:mt-10">
        <WaitlessLanding lang={lang} demoShopUrl={demoShopUrl} />
      </main>
    </div>
  );
}
