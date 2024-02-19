'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import LoginForm from '../LoginForm';
import ModalForm from './ModalForm';

const preventScroll = () => {
  const currentScrollY = window.scrollY;

  document.body.style.position = 'fixed';
  document.body.style.width = '100%';

  document.body.style.overflowY = 'scroll';
  document.documentElement.style.scrollBehavior = 'auto';
  return currentScrollY;
};

const allowScroll = (prevScrollY: number) => {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  document.body.style.overflowY = '';
  window.scrollTo(0, prevScrollY);
};

export default function Modal() {
  const searchParam = useSearchParams();
  const modal = searchParam.get('modal');

  useEffect(() => {
    if (modal) {
      const currentScrollY = window.scrollY;
      document.body.style.position = 'fixed';

      document.body.style.overflowY = 'hidden';
    }
  }, [modal]);

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
