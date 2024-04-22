import ReduxWrapper from '@/store/ReduxWrapper';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '@/components/Navbar';
import ModalProvider from '@/components/Modal/ModalProvider';
import CategoryContextProvider from '@/contexts/CategoryProvider';

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
          <CategoryContextProvider>
            <Navbar />
            {/* Layout UI */}
            <ModalProvider>
              <main className={`${noto.className} min-h-[788px] h-screen`}>
                {children}
              </main>
            </ModalProvider>
            {modal}
          </CategoryContextProvider>
        </body>
      </html>
    </ReduxWrapper>
  );
}
