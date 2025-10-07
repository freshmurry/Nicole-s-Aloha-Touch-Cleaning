import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css';
import { AppLayout } from '@/components/AppLayout';
import { HomePage } from '@/pages/HomePage';
import { WhyDeepCleaningMattersPage } from '@/pages/WhyDeepCleaningMattersPage';
import { HowOftenToCleanPage } from '@/pages/HowOftenToCleanPage';
import { CleaningTipsPage } from '@/pages/CleaningTipsPage';
import { WhyLocalCleaningPage } from '@/pages/WhyLocalCleaningPage';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/why-deep-cleaning-matters",
        element: <WhyDeepCleaningMattersPage />,
      },
      {
        path: "/how-often-to-clean",
        element: <HowOftenToCleanPage />,
      },
      {
        path: "/cleaning-tips-indiana",
        element: <CleaningTipsPage />,
      },
      {
        path: "/why-local-cleaning",
        element: <WhyLocalCleaningPage />,
      },
    ],
  },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>,
);