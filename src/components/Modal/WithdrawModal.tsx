import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hook';
import { logout } from '@/store/auth/auth.slice';
import { useWithdrawUserMutation } from '@/store/auth/authApi.slice';
import BaseModal from './BaseModal';

type Props = {
  onClose: () => void;
};

export default function TravelEditFormModal({ onClose }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [withdraw] = useWithdrawUserMutation();

  const onSubmitHandler = async () => {
    withdraw('hi');
    dispatch(logout());
    onClose();
    router.replace('/');
  };

  return (
    <BaseModal title="회원 탈퇴" onCheck={onSubmitHandler} onClose={onClose}>
      <p>정말 탈퇴하시겠습니까</p>
    </BaseModal>
  );
}
