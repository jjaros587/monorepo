import React, { ReactNode, useRef, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import { ClickOutsideHandler } from '../../hooks';

type PopupPlacement =
  | 'auto'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';

type Offset = number | null | undefined;

interface PopupProps {
  popup: ReactNode;
  placement: PopupPlacement;
  children: ReactNode;
  offset?: [Offset, Offset];
  closeOnChildClick?: boolean;
}

export const Popup: React.FC<PopupProps> = ({
  popup,
  placement,
  children,
  closeOnChildClick = false,
  offset = [0, 10],
}) => {
  const [visible, toggle] = useState(false);
  const containerRef = useRef(null);

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <div ref={containerRef}>
            <div ref={ref} onClick={() => toggle(!visible)}>
              {children}
            </div>
          </div>
        )}
      </Reference>
      {visible && (
        <Popper
          placement={placement}
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: offset,
              },
            },
          ]}
        >
          {({ ref, style, placement }) => (
            <ClickOutsideHandler
              handler={() => toggle(false)}
              exclude={[containerRef]}
              closeOnChildClick={closeOnChildClick}
            >
              <div ref={ref} style={style} data-placement={placement}>
                {popup}
              </div>
            </ClickOutsideHandler>
          )}
        </Popper>
      )}
    </Manager>
  );
};
