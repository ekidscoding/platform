import React, { useCallback } from 'react';
import Editor from "@monaco-editor/react";

import editorOptions from '@/config/monaco-config';
import useTheme from "@/providers/theme-provider/use-theme";
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

type EditorInputProps = {
  code?: string;
  language?: string;
  editorCode?: string;
  setEditorCode?: (code: string) => void;
  executeHandler?: () => Promise<void>;
  isLoading?: boolean;
  isRunning?: boolean;
};

const EditorInput = ({
    language = 'python',
    editorCode = '',
    setEditorCode = () => undefined,
    executeHandler = undefined,
    isLoading = false,
    isRunning = false,
}: EditorInputProps) => {
    const { theme } = useTheme();
    const changeHandler = useCallback((value?: string) => {
        setEditorCode(value ?? '');
    }, [setEditorCode]);

  return (
    <div className="relative mb-10">
        <Editor
            height='70vh'
            theme={theme === 'dark' ? 'vs-dark' : 'vs'}
            options={editorOptions}
            language={language}
            value={editorCode}
            onChange={changeHandler} />
        <div className="editor-actions absolute top-full right-0 flex items-center">
            <Button
                className="mr-1"
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
            <Button
                className="bg-emerald-800 text-amber-50"
                disabled={isLoading || isRunning}
                type='button'>
                Submit answer
            </Button>
        </div>
    </div>
  );
};

export default EditorInput;
