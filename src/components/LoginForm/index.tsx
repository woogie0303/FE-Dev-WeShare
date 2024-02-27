'use client';

import React, { useState } from 'react';
import SignIn from '@/components/LoginForm/SignIn';
import SignUp from '@/components/LoginForm/SignUp';

export default function LoginForm() {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  return (
    <div className="  bg-white rounded-[4rem]">
      {showSignUp ? (
        <SignUp setShowSignUp={setShowSignUp} />
      ) : (
        <SignIn setShowSignUp={setShowSignUp} />
      )}
    </div>
  );
}
