import React from 'react';
import { PythonProvider } from 'react-py';

import './App.css'
import Editor from './components/editor';

function App() {

  return (
    <PythonProvider>
      <Editor />
    </PythonProvider>
  )
}

export default App;
