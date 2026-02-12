import React from 'react';
import { PythonProvider } from 'react-py';

import Header from '@/components/header';
import AppRoutes from '@/routes/app-routes';
import ThemeProvider from '@/providers/theme-provider';
import QueryProvider from '@/providers/query-provider';

import './App.css';

function App() {

    return (
        <PythonProvider>
          <ThemeProvider defaultTheme='light' storageKey='platform-ui-theme'>
              <QueryProvider>
                  <Header />
                  <main id="main" className="main h-svh">
                      <AppRoutes />
                  </main>
              </QueryProvider>
          </ThemeProvider>
        </PythonProvider>
    )
}

export default App;
