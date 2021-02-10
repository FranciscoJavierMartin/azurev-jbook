import { useEffect, useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundler from '../bundler';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface ICodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<ICodeCellProps> = ({ cell }) => {
  const [err, setErr] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const { updateCell } = useActions();

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(async () => {
      const output = await bundler(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction='vertical'>
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue={cell.content}
            onChange={(value: string) => updateCell(cell.id, value)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
