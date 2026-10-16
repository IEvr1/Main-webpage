import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { initApp } from './init-app';
import CustomApp from './CustomApp';
import './styles/global.css';
import './styles/lang-switcher.css';
import './styles/sections.css';

initApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomApp />
    <Analytics />
  </StrictMode>,
);
