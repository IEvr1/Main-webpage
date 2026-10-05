import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initApp } from './init-app';
import ArticleApp from './ArticleApp';
import './styles/global.css';
import './styles/lang-switcher.css';
import './styles/sections.css';
import './styles/articles.css';

initApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArticleApp />
  </StrictMode>,
);
