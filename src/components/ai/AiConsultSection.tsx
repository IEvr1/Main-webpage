import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import { CONTACT } from '../../constants/contact';
import AiConsultForm from './AiConsultForm';

type AiConsultSectionProps = {
  lang: Lang;
};

export default function AiConsultSection({ lang }: AiConsultSectionProps) {
  return (
    <section id="consult" className="ai-consult" aria-labelledby="ai-consult-title">
      <div className="container">
        <h2 id="ai-consult-title" className="section-title ai-section-title">
          {t('ai.consult.title', lang)}
        </h2>
        <p className="section-subtitle">{t('ai.consult.subtitle', lang)}</p>

        <div className="ai-consult__layout">
          <aside className="ai-consult__aside">
            <div className="ai-consult__aside-card">
              <h3 className="ai-consult__aside-title">{t('ai.consult.aside.title', lang)}</h3>
              <ul className="ai-consult__aside-list">
                <li>{t('ai.consult.aside.item1', lang)}</li>
                <li>{t('ai.consult.aside.item2', lang)}</li>
                <li>{t('ai.consult.aside.item3', lang)}</li>
                <li>{t('ai.consult.aside.item4', lang)}</li>
              </ul>
            </div>
            <p className="ai-consult__email">
              {t('ai.consult.orEmail', lang)}{' '}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
          </aside>

          <AiConsultForm lang={lang} />
        </div>
      </div>
    </section>
  );
}
