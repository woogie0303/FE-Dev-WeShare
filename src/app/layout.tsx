import ReduxWrapper from '@/store/ReduxWrapper';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

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
          <Script
            type="text/javascript"
            strategy="beforeInteractive"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&autoload=false&libraries=services`}
          />
          <Navbar />
          {/* Layout UI */}
          <main className={`${noto.className} h-[90vh]`}>{children}</main>
          {modal}
        </body>
      </html>
    </ReduxWrapper>
  );
}
