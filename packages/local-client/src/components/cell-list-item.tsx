import { Cell } from '../state/cell';
import ActionBar from './action-bar';
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import './cell-list-item.css';

interface ICellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<ICellListItemProps> = ({ cell }) => {
  let child: React.ReactNode;

  switch (cell.type) {
    case 'code':
      child = (
        <>
          <div className='action-bar-wrapper'>
            <ActionBar id={cell.id} />
          </div>
          <CodeCell cell={cell} />
        </>
      );
      break;
    case 'text':
      child = (
        <>
          <TextEditor cell={cell} />
          <ActionBar id={cell.id} />
        </>
      );
      break;
  }

  return <div className='cell-list-item'>{child}</div>;
};

export default CellListItem;
