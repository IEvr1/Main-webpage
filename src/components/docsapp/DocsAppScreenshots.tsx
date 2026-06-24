import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

const base = import.meta.env.BASE_URL;

type DocsAppScreenshotsProps = {
  lang: Lang;
};

export default function DocsAppScreenshots({ lang }: DocsAppScreenshotsProps) {
  const screenshots = [
    {
      src: `${base}landing/docsapp-screenshot-inbox.svg`,
      caption: t('docsapp.screenshots.inbox.caption', lang),
      alt: t('docsapp.screenshots.inbox.alt', lang),
    },
    {
      src: `${base}landing/docsapp-screenshot-chat.svg`,
      caption: t('docsapp.screenshots.chat.caption', lang),
      alt: t('docsapp.screenshots.chat.alt', lang),
    },
    {
      src: `${base}landing/docsapp-screenshot-folders.svg`,
      caption: t('docsapp.screenshots.folders.caption', lang),
      alt: t('docsapp.screenshots.folders.alt', lang),
    },
  ];

  return (
    <section className="screenshots-section" aria-labelledby="docsapp-screenshots-title">
      <div className="container">
        <h2 id="docsapp-screenshots-title" className="section-title">
          {t('docsapp.screenshots.title', lang)}
        </h2>
        <p className="section-subtitle">{t('docsapp.screenshots.subtitle', lang)}</p>

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
