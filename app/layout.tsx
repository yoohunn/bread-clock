import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SWRProvider } from '@/components/SWRProvider';
import { ReactHotToastProvider } from '@/components/ReactHotToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: '배고빵', template: '%s | 배고빵' },
  description: '‘빵시계’는 갓구운 빵을 찾는 사람들을 위한 서비스입니다 ;)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SWRProvider>
          <div
            id={'container'}
            className={
              'relative mx-auto w-full h-screen max-w-[428px] max-h-[926px] overflow-y-hidden bg-gray-200'
            }
          >
            {children}
            <ReactHotToastProvider />
          </div>
        </SWRProvider>
      </body>
    </html>
  );
}
