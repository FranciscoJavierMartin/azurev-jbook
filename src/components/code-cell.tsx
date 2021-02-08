import { useEffect, useState } from 'react';

import CodeEditor from './code-editor';
import Preview from './preview';
import bundler from '../bundler';
import Resizable from './resizable';

const CodeCell: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(async () => {
      const output = await bundler(input);
      setCode(output.code);
      setErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue='const b = 1;'
            onChange={(value: string) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} err={err}/>
      </div>
    </Resizable>
  );
};

export default CodeCell;
