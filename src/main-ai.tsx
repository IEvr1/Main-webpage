import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initApp } from './init-app';
import AiSolutionsApp from './AiSolutionsApp';
import './styles/global.css';
import './styles/lang-switcher.css';
import './styles/sections.css';
import './styles/ai-solutions.css';

initApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiSolutionsApp />
  </StrictMode>,
);
