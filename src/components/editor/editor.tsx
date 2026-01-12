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
      <div className="container">
        <h1 className='text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl'>Editor</h1>
      </div>
      <div className="container-fluid">
        <div className='mb-[15px]'>
          <button
            className='rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            onClick={executeHandler}
            disabled={isLoading || isRunning}>
            {isLoading ? "Loading..." : (isRunning ? "Executing..." : "Execute")}
          </button>

        </div>
        <div className='global-wrapper divide-x-4'>
          <EditorInput editorCode={editorCode} setEditorCode={setEditorCode} />
          <EditorOutput output={stdout} error={stderr} />
        </div>
      </div>
    </>
  )
}

export default Editor;
