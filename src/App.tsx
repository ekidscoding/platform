import React from 'react';
import { PythonProvider } from 'react-py';

import './App.css'
import Editor from './components/editor';
import Header from './components/header';

function App() {

  return (
    <PythonProvider>
      <Header />
      <Editor />
    </PythonProvider>
  )
}

export default App;
