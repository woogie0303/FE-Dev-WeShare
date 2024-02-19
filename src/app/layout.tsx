import ReduxWrapper from '@/store/ReduxWrapper';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';

const noto = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxWrapper>
      <html lang="en">
        <body>
          <Navbar />
          {/* Layout UI */}
          <main className={`${noto.className}`}>{children}</main>
          <Modal />
        </body>
      </html>
    </ReduxWrapper>
  );
}
