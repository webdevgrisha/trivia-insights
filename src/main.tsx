import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './reset.css';
import { RouterProvider } from 'react-router';
import { SWRConfig } from 'swr';
import { swrConfig } from './config/swrConfig';
import { router } from './router/createRoutes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRConfig value={swrConfig}>
      <RouterProvider router={router}></RouterProvider>
    </SWRConfig>
  </StrictMode>
);
