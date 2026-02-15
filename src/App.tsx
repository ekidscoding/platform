import { PythonProvider } from "react-py";

import Header from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from '@/routes/app-routes';
import ThemeProvider from '@/providers/theme-provider';
import QueryProvider from '@/providers/query-provider';
import useRedirect from "@/hooks/use-redirect";

import './App.css';

function App() {
    useRedirect();

    return (
        <PythonProvider>
          <ThemeProvider defaultTheme='light' storageKey='platform-ui-theme'>
              <TooltipProvider>
                  <QueryProvider>
                      <Header />
                      <main id="main" className="main h-svh">
                          <AppRoutes />
                      </main>
                  </QueryProvider>
              </TooltipProvider>
          </ThemeProvider>
        </PythonProvider>
    )
}

export default App;
