'use client';

import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function LoginForm() {
  const [showSignIn, setShowSignIn] = useState(true);

  return showSignIn ? (
    <SignIn setShowSignIn={setShowSignIn} />
  ) : (
    <SignUp setShowSignIn={setShowSignIn} />
  );
}
