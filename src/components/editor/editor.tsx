import React, { useCallback, useState } from 'react';
import { usePython } from 'react-py';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

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
        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>Editor</h1>
      </div>
      <div className="container-fluid">
        <div className='mb-[15px]'>
          <Button
            onClick={executeHandler}
            disabled={isLoading || isRunning}
            type='button'>
            {isLoading
              ? <>
                  <Spinner data-icon="inline-start" />
                  Loading...
                </>
              : (isRunning
                ? <>
                    <Spinner data-icon="inline-start" />
                    ...Executing
                  </>
                : "Execute")}
          </Button>
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
