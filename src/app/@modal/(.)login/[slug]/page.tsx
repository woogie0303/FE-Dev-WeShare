import SignIn from '@/components/LoginForm/SignIn';
import SignUp from '@/components/LoginForm/SignUp';
import ModalForm from '@/components/Modal/ModalForm';
import React from 'react';

type Props = {
  params: { slug: string };
};

export default function page({ params }: Props) {
  return (
    <ModalForm>{params.slug === 'signIn' ? <SignIn /> : <SignUp />}</ModalForm>
  );
}
