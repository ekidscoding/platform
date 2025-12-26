import React, { useCallback, useState, useEffect } from 'react';
import { PythonProvider, usePython } from 'react-py';

import './App.css'
import EditorInput from './components/editor/editor-input';
import EditorOutput from './components/editor/editor-output';

function App() {
  const [editorCode, setEditorCode] = useState<string>('// Yor code here');
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();

  const executeHandler = useCallback(async () => {
    runPython(editorCode);
  }, []);

  useEffect(() => {
    navigator.serviceWorker
      .register('/react-py-sw.js')
      .then((registration) =>
        console.log(
          'Service Worker registration successful with scope: ',
          registration.scope
        )
      )
      .catch((err) => console.log('Service Worker registration failed: ', err))
  }, [])

  return (
    <PythonProvider>
      <h1>Editor</h1>
      <button
        onClick={executeHandler}
        disabled={isLoading || isRunning}
      >
        {
          isLoading ? "Loading..." : (isRunning ? "Executing..." : "Execute")
        }
      </button>
      <div className='global-wrapper'>
        <EditorInput editorCode={editorCode} setEditorCode={setEditorCode} />
        <EditorOutput output={stdout} error={stderr} />
      </div>
    </PythonProvider>
  )
}

export default App;
