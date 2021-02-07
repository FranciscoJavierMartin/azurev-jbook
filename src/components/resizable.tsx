import { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';

interface IResizableProps {
  direction: 'vertical' | 'horizontal';
}

const Resizable: React.FC<IResizableProps> = ({ direction, children }) => {
  const [innerHeight, setInnerHeight] = useState<number>(window.innerWidth);
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  const resizableProps: ResizableBoxProps =
    direction === 'horizontal'
      ? {
          className: 'resize-horizontal',
          minConstraints: [innerWidth * 0.2, Infinity],
          maxConstraints: [innerWidth * 0.75, Infinity],
          height: Infinity,
          width: innerWidth * 0.75,
          resizeHandles: ['e'],
        }
      : {
          minConstraints: [Infinity, 24],
          maxConstraints: [Infinity, innerHeight * 0.9],
          height: 300,
          width: Infinity,
          resizeHandles: ['s'],
        };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
