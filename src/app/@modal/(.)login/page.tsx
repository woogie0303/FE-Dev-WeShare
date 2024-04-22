import LoginForm from '@/components/LoginForm';
import ModalForm from '@/components/Modal/ModalForm';
import React from 'react';

export default function Page() {
  return (
    <ModalForm>
      <LoginForm />
    </ModalForm>
  );
}
