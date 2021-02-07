import { ResizableBox } from 'react-resizable';
import './resizable.css';

interface IResizableProps {
  direction: 'vertical' | 'horizontal';
}

const Resizable: React.FC<IResizableProps> = ({ direction, children }) => {
  return (
    <ResizableBox
      minConstraints={[Infinity, 24]}
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      height={300}
      width={Infinity}
      resizeHandles={['s']}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
