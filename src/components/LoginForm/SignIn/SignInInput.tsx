import React, { forwardRef, useEffect, useState } from 'react';

type Props = {
  title: 'Email' | 'Password';
  isError: boolean;
};

export default forwardRef<HTMLInputElement, Props>(function SignInInput(
  { title, isError },
  ref,
) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const labelClass =
    isFocused || inputValue.length > 0
      ? 'top-[-10px] text-sm text-blue-500 font-bold'
      : 'top-5 text-gray-300';

  const inputClass = (isFocused || inputValue.length > 0) && 'border-blue-500';

  useEffect(() => {
    if (isError) {
      setInputValue('');
    }
  }, [isError]);

  return (
    <div className="relative mt-6 py-2">
      <label
        className={`absolute left-0  duration-500 ease-in-out ${labelClass} cursor-text `}
        htmlFor={title}
      >
        {title}
      </label>
      <input
        ref={ref}
        value={inputValue}
        type={title === 'Email' ? 'text' : 'password'}
        id={title}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className={`w-[18rem] border-b-2 py-2 ${inputClass} z-10`}
      />
    </div>
  );
});
