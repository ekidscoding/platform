import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { PythonProvider } from "react-py";

import Header from "@/components/header";
import AppRoutes from '@/routes/app-routes';
import ThemeProvider from '@/providers/theme-provider';
import QueryProvider from '@/providers/query-provider';

import './App.css';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirectedFrom = params.get('redirectedFrom');
        if (redirectedFrom) {
            console.info('Redirected from', redirectedFrom);
            // window.history.replaceState({}, '', redirectedFrom);
            // navigate(redirectedFrom, { replace: true });
        }
    }, [navigate]);

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
