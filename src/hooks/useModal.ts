import { useAppDispatch } from '@/store/hook';
import { closeModal, openModal } from '@/store/modal/modal.slice';

export const useModal = (modalFileName: string) => {
  const dispatch = useAppDispatch();

  const onOpen = () => {
    const meta = { num: 1 };
    dispatch(openModal({ id: modalFileName, meta }));
  };
  const onClose = () => {
    dispatch(closeModal({ id: modalFileName }));
  };

  return { onOpen, onClose };
};
