import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

const base = import.meta.env.BASE_URL;

type FoodOrderScreenshotsProps = {
  lang: Lang;
};

export default function FoodOrderScreenshots({ lang }: FoodOrderScreenshotsProps) {
  const screenshots = [
    {
      src: `${base}landing/foodorder-screenshot-menu.svg`,
      caption: t('foodorder.screenshots.menu.caption', lang),
      alt: t('foodorder.screenshots.menu.alt', lang),
    },
    {
      src: `${base}landing/foodorder-screenshot-dashboard.svg`,
      caption: t('foodorder.screenshots.dashboard.caption', lang),
      alt: t('foodorder.screenshots.dashboard.alt', lang),
    },
    {
      src: `${base}landing/foodorder-screenshot-sms.svg`,
      caption: t('foodorder.screenshots.sms.caption', lang),
      alt: t('foodorder.screenshots.sms.alt', lang),
    },
  ];

  return (
    <section className="screenshots-section" aria-labelledby="foodorder-screenshots-title">
      <div className="container">
        <h2 id="foodorder-screenshots-title" className="section-title">
          {t('foodorder.screenshots.title', lang)}
        </h2>
        <p className="section-subtitle">{t('foodorder.screenshots.subtitle', lang)}</p>

        <div className="screenshots-grid">
          {screenshots.map((shot) => (
            <figure key={shot.src} className="screenshot-item">
              <div className="screenshot-item__frame">
                <img src={shot.src} alt={shot.alt} loading="lazy" width={360} height={640} />
              </div>
              <figcaption className="screenshot-item__caption">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
