import React, { useCallback, useEffect, useState } from 'react';
import { usePython } from 'react-py';

import EditorInput from './editor-input';
import EditorOutput from './editor-output';

const Editor = () => {
  const [editorCode, setEditorCode] = useState<string>('// Your code here');
  const { runPython, stdout, stderr, isLoading, isRunning, isReady } = usePython();

  const executeHandler = useCallback(async () => {
    console.log('111 editorCode', editorCode);
    await runPython(editorCode);
  }, [editorCode]);

  useEffect(() => {
    console.log('111 ready', isReady);
  }, [isReady]);

  return (
    <>
      <h1>Editor</h1>
      <button
        onClick={executeHandler}
        disabled={isLoading || isRunning}>
        {isLoading ? "Loading..." : (isRunning ? "Executing..." : "Execute")}
      </button>
      <div className='global-wrapper'>
        <EditorInput editorCode={editorCode} setEditorCode={setEditorCode} />
        <EditorOutput output={stdout} error={stderr} />
      </div>
    </>
  )
}

export default Editor;
