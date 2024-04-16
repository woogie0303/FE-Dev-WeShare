'use client';

import React, { useState } from 'react';
import { useSignIn } from '@/hooks/useSignIn';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function LoginForm() {
  const [showSignIn, setShowSignIn] = useState(true);
  const { handleSubmit, isError } = useSignIn();

  return showSignIn ? (
    <SignIn
      setShowSignIn={setShowSignIn}
      onSignInSubmit={handleSubmit}
      isError={isError}
    />
  ) : (
    <SignUp setShowSignIn={setShowSignIn} />
  );
}
