import LoginForm from '@/components/LoginForm';
import ModalForm from '@/components/Modal/ModalForm';
import React from 'react';

export default function page() {
  return (
    <ModalForm>
      <LoginForm />
    </ModalForm>
  );
}
