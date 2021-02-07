import { useState } from 'react';

import CodeEditor from './code-editor';
import Preview from './preview';
import bundler from '../bundler';

const CodeCell: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const onClick = async () => {
    const output = await bundler(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue='const b = 1;'
        onChange={(value: string) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
