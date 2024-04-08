import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/modal/modal.slice';
import React, { Suspense, lazy } from 'react';

type Props = {
  fileName: string;
};

export default function LazyModal({ fileName }: Props) {
  const dispatch = useAppDispatch();

  const Component = lazy(() => import(`@/components/Modal/${fileName}`));

  const handleModalClose = () => {
    dispatch(closeModal({ id: fileName }));
  };
  return (
    <Suspense>
      <Component onClose={handleModalClose} />
    </Suspense>
  );
}
