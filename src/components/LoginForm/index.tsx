'use client';

import React, { useState } from 'react';
import SignIn from '@/components/LoginForm/SignIn';
import SignUp from '@/components/LoginForm/SignUp';

export default function LoginForm() {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  return (
    <div className=" bg-white rounded-[4rem] border-2 border-solid">
      {showSignUp ? (
        <SignUp setShowSignUp={setShowSignUp} />
      ) : (
        <SignIn setShowSignUp={setShowSignUp} />
      )}
    </div>
  );
}
