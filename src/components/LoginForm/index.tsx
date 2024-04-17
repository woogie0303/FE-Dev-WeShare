'use client';

import React, { useState } from 'react';
import { useSignIn } from '@/hooks/Login/useSignIn';
import { useSignUp } from '@/hooks/Login/useSignUp';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function LoginForm() {
  const [showSignIn, setShowSignIn] = useState(true);
  const { handleSignIn, isError } = useSignIn();
  const { handleSignUp, isSuccess } = useSignUp();

  return showSignIn ? (
    <SignIn
      setShowSignIn={setShowSignIn}
      onSignInSubmit={handleSignIn}
      isError={isError}
    />
  ) : (
    <SignUp
      isSuccess={isSuccess}
      onSignUpSubmit={handleSignUp}
      setShowSignIn={setShowSignIn}
    />
  );
}
