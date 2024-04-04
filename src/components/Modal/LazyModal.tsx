import { useAppDispatch, useAppSelector } from '@/store/hook';
import { closeModal } from '@/store/modal/modal.slice';
import React, { Suspense, lazy } from 'react';

type Props = {
  fileName: string;
};

export default function LazyModal({ fileName }: Props) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(
    (state) => state.modal.modals[fileName].open ?? false,
  );
  const Component = lazy(() => import(`@/components/Modal/${fileName}`));

  const handleModalClose = () => {
    dispatch(closeModal({ id: fileName }));
  };
  return (
    fileName &&
    isOpen && (
      <Suspense>
        <Component onClose={handleModalClose} />
      </Suspense>
    )
  );
}
