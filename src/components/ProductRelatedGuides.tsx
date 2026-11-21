import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';
import { articlesManifest, getGuidesForProduct } from '../articles/manifest';

const MAX_GUIDES = 5;

type ProductRelatedGuidesProps = {
  lang: Lang;
  productAppId: string;
};

export default function ProductRelatedGuides({ lang, productAppId }: ProductRelatedGuidesProps) {
  const guides = getGuidesForProduct(productAppId, lang, MAX_GUIDES);
  if (guides.length === 0) return null;

  const listingHref = articlesManifest.listing[lang];

  return (
    <section className="product-guides" aria-labelledby="product-guides-title">
      <div className="container">
        <h2 id="product-guides-title" className="section-title">
          {t('productGuides.title', lang)}
        </h2>
        <p className="section-subtitle">{t('productGuides.subtitle', lang)}</p>

        <ul className="product-guides__list">
          {guides.map((article) => (
            <li key={article.slug}>
              <a href={article.paths[lang]} className="product-guides__link">
                <span className="product-guides__link-title">{article.titles[lang]}</span>
                <span className="product-guides__link-text">{article.descriptions[lang]}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="product-guides__all">
          <a href={listingHref}>{t('productGuides.viewAll', lang)}</a>
        </p>
      </div>
    </section>
  );
}