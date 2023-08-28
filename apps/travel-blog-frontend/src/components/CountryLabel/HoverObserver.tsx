import { useState, useCallback } from 'react';

interface Props {
  children: (props: { isHovered: boolean }) => React.ReactNode;
}

export const HoverObserver: React.FC<Props> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children({
        isHovered,
      })}
    </div>
  );
};
