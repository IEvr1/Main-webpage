import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomeApp from './HomeApp';
import './styles/global.css';
import './styles/lang-switcher.css';
import './styles/sections.css';
import './styles/home.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomeApp />
  </StrictMode>,
);
