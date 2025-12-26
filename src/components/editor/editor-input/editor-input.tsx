import React, { useCallback } from 'react';
import Editor from "@monaco-editor/react";

import editorOptions from '../../../config/monaco-config';
import './editor-input.css';

type EditorInputProps = {
  code?: string;
  isDarkMode?: boolean;
  language?: string;
  editorCode?: string;
  setEditorCode?: (code: string) => void;
};

const EditorInput = ({
  isDarkMode = false,
  language = 'python',
  editorCode = '',
  setEditorCode = () => undefined,
}: EditorInputProps) => {
  const changeHandler = useCallback((value?: string) => {
    setEditorCode(value ?? '')
  }, []);

  return (
    <div className='editor-input-wrapper'>
      <Editor
        height='50vh'
        theme={isDarkMode ? 'vs-dark' : 'vs'}
        options={editorOptions}
        language={language}
        value={editorCode}
        onChange={changeHandler}
      />
    </div>
  );
};

export default EditorInput;
