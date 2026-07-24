import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

const base = import.meta.env.BASE_URL;

type SchoolMealsScreenshotsProps = {
  lang: Lang;
};

export default function SchoolMealsScreenshots({ lang }: SchoolMealsScreenshotsProps) {
  const screenshots = [
    {
      src: `${base}landing/schoolmeals-screenshot-home.svg`,
      caption: t('schoolmeals.screenshots.home.caption', lang),
      alt: t('schoolmeals.screenshots.home.alt', lang),
    },
    {
      src: `${base}landing/schoolmeals-screenshot-kitchen.svg`,
      caption: t('schoolmeals.screenshots.kitchen.caption', lang),
      alt: t('schoolmeals.screenshots.kitchen.alt', lang),
    },
    {
      src: `${base}landing/schoolmeals-screenshot-parent.svg`,
      caption: t('schoolmeals.screenshots.parent.caption', lang),
      alt: t('schoolmeals.screenshots.parent.alt', lang),
    },
  ];

  return (
    <section className="screenshots-section" aria-labelledby="schoolmeals-screenshots-title">
      <div className="container">
        <h2 id="schoolmeals-screenshots-title" className="section-title">
          {t('schoolmeals.screenshots.title', lang)}
        </h2>
        <p className="section-subtitle">{t('schoolmeals.screenshots.subtitle', lang)}</p>

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
