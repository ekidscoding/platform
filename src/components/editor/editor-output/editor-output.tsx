import React from 'react';

type EditorOutputProps = {
  output?: string;
  error?: string;
}

const EditorOutput = ({ output = '', error = '' }: EditorOutputProps) => (
  <div className="editor-output-wrapper bg-background w-full min-h-[100px] max-h-[calc(30dvh-104px)] border overflow-y-auto relative">
      <div className="bg-gray-400 py-1 px-2.5 sticky left-0 top-0 w-full">Output:</div>
      <div className="p-2.5">
          <pre>
              <code>{output}</code>
          </pre>
          {error && (
              <pre className="text-destructive">
                  <code>{error}</code>
              </pre>
          )}
      </div>
  </div>
);

export default EditorOutput;
