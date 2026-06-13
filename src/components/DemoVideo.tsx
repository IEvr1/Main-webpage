import { useEffect, useState } from 'react';

const base = import.meta.env.BASE_URL;
const VIDEO_PATH = `${base}landing/demo.mp4`;
const POSTER_PATH = `${base}landing/demo-poster.svg`;

export default function DemoVideo() {
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
          Δείτε πώς λειτουργεί
        </h2>
        <p className="section-subtitle">
          Μια γρήγορη περιήγηση στη ροή κράτησης — από το chat μέχρι την επιβεβαίωση SMS.
        </p>

        <div className="video-wrapper">
          {videoAvailable ? (
            <video controls preload="metadata" poster={POSTER_PATH}>
              <source src={VIDEO_PATH} type="video/mp4" />
              Το πρόγραμμα περιήγησής σας δεν υποστηρίζει video.
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
              <p className="video-placeholder__title">Demo video — σύντομα διαθέσιμο</p>
              <p className="video-placeholder__text">
                Αντικαταστήστε το placeholder προσθέτοντας το video σας στον φάκελο
                public/landing/.
              </p>
              <code className="video-placeholder__path">public/landing/demo.mp4</code>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
