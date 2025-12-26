import React from 'react';

import './editor-output.css';

type EditorOutputProps = {
  output?: string;
  error?: string;
}

const EditorOutput = ({ output = '', error = '' }: EditorOutputProps) => (
  <div className='editor-output-wrapper'>
    <pre>
      <code>{output}</code>
    </pre>
    {error && (
      <pre>
        <code>{error}</code>
      </pre>
    )}
  </div>
);

export default EditorOutput;
