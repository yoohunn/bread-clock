'use client';
import { Toaster } from 'react-hot-toast';

export function ReactHotToastProvider() {
  return (
    <Toaster
      position='bottom-center'
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: '#33312C',
          fontWeight: 500,
          padding: '12px 16px',
          color: 'white',
          fontSize: 15,
          height: 47,
        },
        duration: 8000,
      }}
    />
  );
}
