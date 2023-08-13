'use client';
import {
  cloneElement,
  ReactNode,
  useState,
  ReactElement,
  MouseEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

interface Props extends WithChildren {
  buttonNode: ReactNode;
}

export function OpenBottomDrawer({ buttonNode, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    open();
  };

  return (
    <>
      {cloneElement(buttonNode as ReactElement, { onClick })}
      {isOpen && (
        <PortalOverlay isOpen={isOpen} close={close}>
          <BottomSheet close={close}>
            <div className={'p-6 flex flex-col gap-6'}>{children}</div>
          </BottomSheet>
        </PortalOverlay>
      )}
    </>
  );
}

interface PortalOverlayProps extends WithChildren {
  isOpen: boolean;
  close: () => void;
}

export function PortalOverlay({ isOpen, close, children }: PortalOverlayProps) {
  if (typeof window === 'undefined') {
    return null;
  }
  return createPortal(
    children,
    document.getElementById('container') as Element,
  );
}

interface BottomSheetProps extends WithChildren, WithClassName {
  close: () => void;
}
export function BottomSheet({ children, className, close }: BottomSheetProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className={'absolute inset-0 bg-black/20'}
      onClick={(e) => {
        e.stopPropagation();

        if (e.target === e.currentTarget) {
          close();
        }
      }}
    >
      <motion.section
        initial={{ y: '100%' }}
        animate={{
          y: 0,
          transition: { duration: 0.2 },
        }}
        exit={{ y: '100%', transition: { duration: 2 } }}
        className={`absolute left-0 bottom-0 z-10 w-full h-[154px] rounded-t-2xl bg-white drop-shadow-3xl ${className}`}
      >
        {children}
      </motion.section>
    </motion.div>
  );
}
