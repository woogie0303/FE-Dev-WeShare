'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import LoginForm from '../LoginForm';
import ModalForm from './ModalForm';

export default function Modal() {
  const searchParam = useSearchParams();
  const modal = searchParam.get('modal');

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {modal && (
        <ModalForm>
          <LoginForm />
        </ModalForm>
      )}
    </>
  );
}
