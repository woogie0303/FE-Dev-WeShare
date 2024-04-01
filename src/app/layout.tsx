import ReduxWrapper from '@/store/ReduxWrapper';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '@/components/Navbar';

const noto = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ReduxWrapper>
      <html lang="en">
        <body>
          <Navbar />
          {/* Layout UI */}
          <main className={`${noto.className} h-[100vh]`}>{children}</main>
          {modal}
        </body>
      </html>
    </ReduxWrapper>
  );
}
