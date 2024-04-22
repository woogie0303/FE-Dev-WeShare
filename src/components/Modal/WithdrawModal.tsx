import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hook';
import { logout } from '@/store/auth/auth.slice';
import { useWithdrawUserMutation } from '@/store/auth/authApi.slice';
import { useRef } from 'react';
import BaseModal from './BaseModal';

type Props = {
  onClose: () => void;
};

export default function TravelEditFormModal({ onClose }: Props) {
  const router = useRouter();
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [withdraw] = useWithdrawUserMutation();

  const onSubmitHandler = async () => {
    withdraw({ password: passwordRef.current!.value });
    dispatch(logout());
    onClose();
    router.replace('/');
  };

  return (
    <BaseModal title="회원 탈퇴" onCheck={onSubmitHandler} onClose={onClose}>
      <p>비밀번호를 입력해주세요</p>
      <input
        ref={passwordRef}
        type="password"
        className="text-black"
        onChange={(e) => {
          passwordRef.current!.value = e.target.value;
        }}
      />
    </BaseModal>
  );
}
