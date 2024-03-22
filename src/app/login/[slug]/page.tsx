import SignIn from '@/components/LoginForm/SignIn';
import SignUp from '@/components/LoginForm/SignUp';
import React from 'react';

type Props = {
  params: { slug: string };
};

export default function page({ params }: Props) {
  return (
    <div className="flex h-full justify-center items-center">
      {params.slug === 'signIn' ? <SignIn /> : <SignUp />}
    </div>
  );
}
