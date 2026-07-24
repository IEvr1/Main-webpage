import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initApp } from './init-app';
import SchoolMealsApp from './SchoolMealsApp';
import './styles/global.css';
import './styles/lang-switcher.css';
import './styles/sections.css';

initApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SchoolMealsApp />
  </StrictMode>,
);
