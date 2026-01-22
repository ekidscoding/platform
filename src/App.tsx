import React from 'react';
import { PythonProvider } from 'react-py';

import Header from '@/components/header';
import AppRoutes from '@/routes/app-routes';
import ThemeProvider from '@/providers/theme-provider';

import './App.css';

function App() {

  return (
    <PythonProvider>
      <ThemeProvider defaultTheme='light' storageKey='platform-ui-theme'>
        <Header />
        <AppRoutes />
      </ThemeProvider>
    </PythonProvider>
  )
}

export default App;
