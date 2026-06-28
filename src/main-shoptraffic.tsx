import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initApp } from './init-app';
import ShopTrafficApp from './ShopTrafficApp';
import './styles/shoptraffic.css';
import './styles/lang-switcher.css';
import './styles/sections.css';

initApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopTrafficApp />
  </StrictMode>,
);
