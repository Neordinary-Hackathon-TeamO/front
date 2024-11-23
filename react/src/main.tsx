import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router.tsx';
import 'the-new-css-reset/css/reset.css';
import './index.css';

const [MILLISECOND, SECOND, MINUTE] = [1000, 60, 5];
const STALE_TIME = MILLISECOND * SECOND * MINUTE;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      // ✅ turns retries off
      retry: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
