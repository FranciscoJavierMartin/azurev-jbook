import { Cell } from '../state/cell';
import CodeCell from './code-cell';
import TextEditor from './text-editor';

interface ICellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<ICellListItemProps> = ({ cell }) => {
  let child: React.ReactNode;

  switch (cell.type) {
    case 'code':
      child = <CodeCell cell={cell} />;
      break;
    case 'text':
      child = <TextEditor />;
      break;
  }
  return <div>{child}</div>;
};

export default CellListItem;
