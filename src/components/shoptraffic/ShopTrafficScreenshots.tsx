import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

const base = import.meta.env.BASE_URL;

type ShopTrafficScreenshotsProps = {
  lang: Lang;
};

export default function ShopTrafficScreenshots({ lang }: ShopTrafficScreenshotsProps) {
  const screenshots = [
    {
      src: `${base}landing/shoptraffic-screenshot-customer-${lang}.png`,
      caption: t('waitless.screenshots.customer.caption', lang),
      alt: t('waitless.screenshots.customer.alt', lang),
    },
    {
      src: `${base}landing/shoptraffic-screenshot-owner-${lang}.png`,
      caption: t('waitless.screenshots.owner.caption', lang),
      alt: t('waitless.screenshots.owner.alt', lang),
    },
    {
      src: `${base}landing/shoptraffic-screenshot-hours-${lang}.png`,
      caption: t('waitless.screenshots.hours.caption', lang),
      alt: t('waitless.screenshots.hours.alt', lang),
    },
  ];

  return (
    <section className="screenshots-section" aria-labelledby="shoptraffic-screenshots-title">
      <div className="container">
        <h2 id="shoptraffic-screenshots-title" className="section-title">
          {t('waitless.screenshots.title', lang)}
        </h2>
        <p className="section-subtitle">{t('waitless.screenshots.subtitle', lang)}</p>

        <div className="screenshots-grid">
          {screenshots.map((shot) => (
            <figure key={shot.src} className="screenshot-item">
              <div className="screenshot-item__frame">
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </div>
              <figcaption className="screenshot-item__caption">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
