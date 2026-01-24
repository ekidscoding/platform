import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { QUERY_CONFIG } from './constants';

type QueryProviderProps = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: QueryProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: QUERY_CONFIG.STALE_TIME,
        gcTime: QUERY_CONFIG.CACHE_TIME,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        retry: QUERY_CONFIG.RETRY_QUANTITY,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryProvider;
