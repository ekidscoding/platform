import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { usePython } from "react-py";

import { useSidebar } from "@/components/ui/sidebar";

import EditorInput from "./editor-input";
import EditorOutput from "./editor-output";
import { DEFAULT_EDITOR_TEXT, DEFAULT_OUTPUT_TEXT, DEFAULT_OUTPUT_ERROR } from "./constants";

const Editor = () => {
    const [editorCode, setEditorCode] = useState<string>(DEFAULT_EDITOR_TEXT);
    const [outputCode, setOutputCode] = useState<string>(DEFAULT_OUTPUT_TEXT);
    const [outputError, setOutputError] = useState<string>(DEFAULT_OUTPUT_ERROR);
    const { runPython, stdout, stderr, isLoading, isRunning, sendInput, prompt } = usePython();
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
        setOutputCode(DEFAULT_OUTPUT_TEXT);
        setOutputError(DEFAULT_OUTPUT_ERROR);
    };

    useEffect(() => {
        setOutputCode(stdout);
    }, [stdout]);

    useEffect(() => {
        setOutputError(stderr);
    }, [stderr]);

    useEffect(() => {
        if (prompt) {
            const promptInput = window.prompt(prompt);
            sendInput(promptInput ?? '');
        }
    }, [prompt]);

  return (
    <div className={editorContainerClassList}>
        <EditorInput
            editorCode={editorCode}
            setEditorCode={setEditorCode}
            handleResetCode={handleResetCode}
            executeHandler={executeHandler}
            isLoading={isLoading}
            isRunning={isRunning} />
        <EditorOutput output={outputCode} error={outputError} />
        </div>
    );
};

export default Editor;
