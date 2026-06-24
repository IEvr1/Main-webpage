import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DocsAppProduct from './DocsAppProduct';
import './styles/global.css';
import './styles/lang-switcher.css';
import './styles/sections.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DocsAppProduct />
  </StrictMode>,
);
