import { useState } from 'react';

import CodeEditor from './code-editor';
import Preview from './preview';
import bundler from '../bundler';
import Resizable from './resizable';

const CodeCell: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const onClick = async () => {
    const output = await bundler(input);
    setCode(output);
  };

  return (
    <Resizable direction='vertical'>
      <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
        <CodeEditor
          initialValue='const b = 1;'
          onChange={(value: string) => setInput(value)}
        />
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
