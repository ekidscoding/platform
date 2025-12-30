import React, { useCallback, useState } from 'react';
import { usePython } from 'react-py';

import EditorInput from './editor-input';
import EditorOutput from './editor-output';
import { DEFAULT_EDITOR_TEXT } from './constants';

const Editor = () => {
  const [editorCode, setEditorCode] = useState<string>(DEFAULT_EDITOR_TEXT);
  const { runPython, stdout, stderr, isLoading, isRunning, isReady } = usePython();

  const executeHandler = useCallback(async () => {
    await runPython(editorCode);
  }, [editorCode]);

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
