import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ShopTrafficApp from './ShopTrafficApp';
import './styles/shoptraffic.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopTrafficApp />
  </StrictMode>,
);
