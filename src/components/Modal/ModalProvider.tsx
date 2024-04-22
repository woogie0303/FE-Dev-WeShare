'use client';

import { useAppSelector } from '@/store/hook';
import { getOpenModals } from '@/store/modal/modal.slice';
import { ReactNode } from 'react';
import LazyModal from './LazyModal';

type Props = {
  children: ReactNode;
};

export default function ModalProvider({ children }: Props) {
  const modals = useAppSelector(getOpenModals);

  return (
    <>
      {modals?.map((modalName) => (
        <LazyModal key={modalName} fileName={modalName} />
      ))}
      {children}
    </>
  );
}
