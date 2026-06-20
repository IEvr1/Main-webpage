import { useEffect } from 'react';
import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

export type FaqItemDef = {
  questionKey: string;
  answerKey: string;
};

type FaqSectionProps = {
  lang: Lang;
  titleKey: string;
  subtitleKey?: string;
  items: readonly FaqItemDef[];
};

const FAQ_SCHEMA_ID = 'faq-schema';

export default function FaqSection({ lang, titleKey, subtitleKey, items }: FaqSectionProps) {
  useEffect(() => {
    let script = document.getElementById(FAQ_SCHEMA_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = FAQ_SCHEMA_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: t(item.questionKey, lang),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t(item.answerKey, lang),
        },
      })),
    };
    script.textContent = JSON.stringify(schema);
  }, [lang, items]);

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title" className="section-title">
          {t(titleKey, lang)}
        </h2>
        {subtitleKey ? <p className="section-subtitle">{t(subtitleKey, lang)}</p> : null}

        <div className="faq-list">
          {items.map((item) => (
            <details key={item.questionKey} className="faq-item">
              <summary className="faq-item__question">{t(item.questionKey, lang)}</summary>
              <p className="faq-item__answer">{t(item.answerKey, lang)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
