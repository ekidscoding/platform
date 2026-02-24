import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { usePython } from "react-py";

import { useSidebar } from "@/components/ui/sidebar";

import EditorInput from "./editor-input";
import EditorOutput from "./editor-output";
import { DEFAULT_EDITOR_TEXT, DEFAULT_OUTPUT_TEXT, DEFAULT_OUTPUT_ERROR } from "./constants";

type EditorProps = {
    codeSample?: string | null;
    hasNavigation?: boolean;
};

const Editor = ({
    codeSample = DEFAULT_EDITOR_TEXT,
    hasNavigation = false,
}: EditorProps) => {
    const [editorCode, setEditorCode] = useState<string | null>(codeSample);
    const [outputCode, setOutputCode] = useState<string>(DEFAULT_OUTPUT_TEXT);
    const [outputError, setOutputError] = useState<string>(DEFAULT_OUTPUT_ERROR);
    const { runPython, stdout, stderr, isLoading, isRunning, sendInput, prompt } = usePython();
    const { state } = useSidebar();

    const executeHandler = useCallback(async () => {
        await runPython(editorCode ?? '');
    }, [editorCode]);

    const editorContainerClassList = classNames(
        "editor-container w-full max-w-[100%] h-svh pt-[84px] overflow-hidden",
        "transition-[max-width] duration-500 ease-in-out",
        {
            "max-w-[50%]": state === 'expanded',
            "md:pt-[126px]": hasNavigation,
        },
    );

    const handleResetCode = () => {
        setEditorCode(codeSample);
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
        setEditorCode(codeSample);
    }, [codeSample]);

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
