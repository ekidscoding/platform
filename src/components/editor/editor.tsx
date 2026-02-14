import classNames from "classnames";
import React, { useCallback, useState } from 'react';
import { usePython } from 'react-py';

import { useSidebar } from "@/components/ui/sidebar";

import EditorInput from './editor-input';
import EditorOutput from './editor-output';
import { DEFAULT_EDITOR_TEXT } from './constants';

const Editor = () => {
    const [editorCode, setEditorCode] = useState<string>(DEFAULT_EDITOR_TEXT);
    const { runPython, stdout, stderr, isLoading, isRunning, isReady } = usePython();
    const { state } = useSidebar();

    const executeHandler = useCallback(async () => {
        await runPython(editorCode);
    }, [editorCode]);

    const editorContainerClassList = classNames(
        "editor-container w-full max-w-[100%] h-svh pt-16 overflow-hidden",
        "transition-[max-width] duration-500 ease-in-out",
        {
            "max-w-[50%]": state === 'expanded',
        },
    );

    const handleResetCode = () => {
        setEditorCode(DEFAULT_EDITOR_TEXT);
    };

  return (
    <div className={editorContainerClassList}>
        <EditorInput
            editorCode={editorCode}
            setEditorCode={setEditorCode}
            handleResetCode={handleResetCode}
            executeHandler={executeHandler}
            isLoading={isLoading}
            isRunning={isRunning} />
        <EditorOutput output={stdout} error={stderr} />
    </div>
  )
}

export default Editor;
