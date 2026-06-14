import { useEffect, useState } from 'react';
import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

const base = import.meta.env.BASE_URL;
const VIDEO_PATH = `${base}landing/demo.mp4`;
const POSTER_PATH = `${base}landing/demo-poster.svg`;

type DemoVideoProps = {
  lang: Lang;
};

export default function DemoVideo({ lang }: DemoVideoProps) {
  const [videoAvailable, setVideoAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(VIDEO_PATH, { method: 'HEAD' })
      .then((res) => setVideoAvailable(res.ok))
      .catch(() => setVideoAvailable(false));
  }, []);

  return (
    <section className="demo-section" aria-labelledby="demo-title">
      <div className="container">
        <h2 id="demo-title" className="section-title">
          {t('booking.demo.title', lang)}
        </h2>
        <p className="section-subtitle">{t('booking.demo.subtitle', lang)}</p>

        <div className="video-wrapper">
          {videoAvailable ? (
            <video controls preload="metadata" poster={POSTER_PATH}>
              <source src={VIDEO_PATH} type="video/mp4" />
              {t('booking.demo.noVideo', lang)}
            </video>
          ) : (
            <div className="video-placeholder">
              <svg
                className="video-placeholder__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
              </svg>
              <p className="video-placeholder__title">{t('booking.demo.placeholderTitle', lang)}</p>
              <p className="video-placeholder__text">{t('booking.demo.placeholderText', lang)}</p>
              <code className="video-placeholder__path">public/landing/demo.mp4</code>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
