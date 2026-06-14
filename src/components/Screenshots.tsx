import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

const base = import.meta.env.BASE_URL;

type ScreenshotsProps = {
  lang: Lang;
};

export default function Screenshots({ lang }: ScreenshotsProps) {
  const screenshots = [
    {
      src: `${base}landing/screenshot-chat.svg`,
      caption: t('booking.screenshots.chat.caption', lang),
      alt: t('booking.screenshots.chat.alt', lang),
    },
    {
      src: `${base}landing/screenshot-dashboard.svg`,
      caption: t('booking.screenshots.dashboard.caption', lang),
      alt: t('booking.screenshots.dashboard.alt', lang),
    },
    {
      src: `${base}landing/screenshot-sms.svg`,
      caption: t('booking.screenshots.sms.caption', lang),
      alt: t('booking.screenshots.sms.alt', lang),
    },
  ];

  return (
    <section className="screenshots-section" aria-labelledby="screenshots-title">
      <div className="container">
        <h2 id="screenshots-title" className="section-title">
          {t('booking.screenshots.title', lang)}
        </h2>
        <p className="section-subtitle">{t('booking.screenshots.subtitle', lang)}</p>

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
