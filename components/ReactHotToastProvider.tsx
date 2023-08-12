'use client';
import { Toaster } from 'react-hot-toast';

export function ReactHotToastProvider() {
  return (
    <Toaster
      position='bottom-center'
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          fontWeight: 500,
          padding: '10px 16px',
        },
        className: 'backdrop-blur-sm',
      }}
    />
  );
}
