import { useEffect, useRef, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import './text-editor.css';

interface ITextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<ITextEditorProps> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        !(
          ref.current &&
          event.target &&
          ref.current.contains(event.target as Node)
        )
      ) {
        setEditing(false);
      }
    };
    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  return editing ? (
    <div className='text-editor' ref={ref}>
      <MDEditor
        value={cell.content}
        onChange={(v) => updateCell(cell.id, v || '')}
      />
    </div>
  ) : (
    <div className='text-editor card' onClick={() => setEditing(true)}>
      <div className='card-content'>
        <MDEditor.Markdown source={cell.content || 'Click to edit'} />
      </div>
    </div>
  );
};

export default TextEditor;
