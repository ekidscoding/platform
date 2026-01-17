import React from 'react';
import { PythonProvider } from 'react-py';

import './App.css';
import Header from './components/header';
import AppRoutes from './routes/app-routes';

function App() {

  return (
    <PythonProvider>
      <Header />
      <AppRoutes />
    </PythonProvider>
  )
}

export default App;
