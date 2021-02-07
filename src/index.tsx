import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundler from './bundler';

const App = () => {
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

ReactDOM.render(<App />, document.getElementById('root'));
