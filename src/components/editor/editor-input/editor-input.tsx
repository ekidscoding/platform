import React, { useCallback, useEffect, useState } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import { RefreshCw } from "lucide-react";

import editorOptions from "@/config/monaco-config";
import useTheme from "@/providers/theme-provider/use-theme";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import getEditorTheme from "@/components/editor/editor-input/get-editor-theme";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type EditorInputProps = {
    code?: string;
    language?: string;
    editorCode?: string;
    setEditorCode?: (code: string) => void;
    handleResetCode?: () => void;
    executeHandler?: () => Promise<void>;
    isLoading?: boolean;
    isRunning?: boolean;
};

const EditorInput = ({
    language = 'python',
    editorCode = '',
    setEditorCode = () => undefined,
    handleResetCode = () => undefined,
    executeHandler = undefined,
    isLoading = false,
    isRunning = false,
}: EditorInputProps) => {
    const [monacoInstance, setMonacoInstance] = useState<Monaco | null>(null);
    const { theme } = useTheme();
    const changeHandler = useCallback((value?: string) => {
        setEditorCode(value ?? '');
    }, [setEditorCode]);

    const handleEditorDidMount = (_editor: any, monaco: Monaco) => {
        setMonacoInstance(monaco);
    };

    useEffect(() => {
        const currentTheme = getEditorTheme(theme);
        import(`monaco-themes/themes/${currentTheme}.json`).then((data) => {
            monacoInstance?.editor.defineTheme(currentTheme, data.default || data);
            monacoInstance?.editor.setTheme(currentTheme);
        });
    }, [theme, monacoInstance]);

  return (
    <div className="relative mb-10">
        <Editor
            height='70vh'
            options={editorOptions}
            language={language}
            value={editorCode}
            onChange={changeHandler}
            onMount={handleEditorDidMount} />
        <div className="editor-actions absolute top-full right-0 flex w-full items-center justify-end">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        className="mr-auto"
                        size="icon"
                        onClick={handleResetCode}
                        disabled={isLoading || isRunning}
                        type='button'>
                        <RefreshCw />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Reset your code</p>
                </TooltipContent>
            </Tooltip>
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
                className="bg-emerald-600"
                disabled={isLoading || isRunning}
                type='button'>
                Submit answer
            </Button>
        </div>
    </div>
  );
};

export default EditorInput;
