import React from 'react';

type EditorOutputProps = {
  output?: string;
  error?: string;
}

const EditorOutput = ({ output = '', error = '' }: EditorOutputProps) => (
  <div className="editor-output-wrapper bg-background w-full min-h-[100px] border">
      <div className="bg-gray-400 py-1 px-2.5">Output:</div>
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
