import ReduxWrapper from '@/store/ReduxWrapper';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';
import Script from 'next/script';

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
          <Script
            type="text/javascript"
            strategy="beforeInteractive"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=031ced09342b5f52a08232da53f03338&autoload=false&libraries=services"
          />
          <Navbar />
          {/* Layout UI */}
          <main className={`${noto.className}`}>{children}</main>
          <Modal />
        </body>
      </html>
    </ReduxWrapper>
  );
}
