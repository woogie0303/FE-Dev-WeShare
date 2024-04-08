import { useAppDispatch, useAppSelector } from '@/store/hook';
import { closeModal, isModalOpen, openModal } from '@/store/modal/modal.slice';

export const useModal = (modalFileName: string) => {
  const dispatch = useAppDispatch();

  const onOpen = () => {
    dispatch(openModal({ id: modalFileName }));
  };
  const onClose = () => {
    dispatch(closeModal({ id: modalFileName }));
  };

  const isOpen = useAppSelector((state) => isModalOpen(state, modalFileName));

  return { onOpen, onClose, isOpen };
};
