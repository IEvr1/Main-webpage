import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initApp } from './init-app';
import FaqPageApp from './FaqPageApp';
import './styles/global.css';
import './styles/lang-switcher.css';
import './styles/sections.css';

initApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FaqPageApp />
  </StrictMode>,
);
