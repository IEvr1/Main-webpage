import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

const base = import.meta.env.BASE_URL;

type BookingScreenshotsProps = {
  lang: Lang;
};

export default function BookingScreenshots({ lang }: BookingScreenshotsProps) {
  const screenshots = [
    {
      src: `${base}landing/booking-screenshot-chat-${lang}.png`,
      caption: t('booking.screenshots.chat.caption', lang),
      alt: t('booking.screenshots.chat.alt', lang),
    },
    {
      src: `${base}landing/booking-screenshot-dashboard-${lang}.png`,
      caption: t('booking.screenshots.dashboard.caption', lang),
      alt: t('booking.screenshots.dashboard.alt', lang),
    },
    {
      src: `${base}landing/booking-screenshot-sms-${lang}.png`,
      caption: t('booking.screenshots.sms.caption', lang),
      alt: t('booking.screenshots.sms.alt', lang),
    },
  ];

  return (
    <section className="screenshots-section" aria-labelledby="booking-screenshots-title">
      <div className="container">
        <h2 id="booking-screenshots-title" className="section-title">
          {t('booking.screenshots.title', lang)}
        </h2>
        <p className="section-subtitle">{t('booking.screenshots.subtitle', lang)}</p>

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
