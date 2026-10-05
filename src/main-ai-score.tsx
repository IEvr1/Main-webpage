import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initApp } from './init-app';
import AiScoreApp from './AiScoreApp';
import './styles/global.css';
import './styles/lang-switcher.css';
import './styles/sections.css';
import './styles/ai-score.css';

initApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiScoreApp />
  </StrictMode>,
);
