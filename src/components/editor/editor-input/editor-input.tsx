import React, { useCallback } from "react";
import Editor from "@monaco-editor/react";
import { ReplyIcon } from "lucide-react";

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
    const { theme } = useTheme();
    const changeHandler = useCallback((value?: string) => {
        setEditorCode(value ?? '');
    }, [setEditorCode]);

  return (
    <div className="relative mb-10">
        <Editor
            height='70vh'
            theme={getEditorTheme(theme)}
            options={editorOptions}
            language={language}
            value={editorCode}
            onChange={changeHandler} />
        <div className="editor-actions absolute top-full right-0 flex items-center">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        className="mr-1"
                        size="icon"
                        onClick={handleResetCode}
                        disabled={isLoading || isRunning}
                        type='button'>
                        <ReplyIcon />
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
                className="bg-emerald-800 text-amber-50 hover:text-black"
                disabled={isLoading || isRunning}
                type='button'>
                Submit answer
            </Button>
        </div>
    </div>
  );
};

export default EditorInput;
