import ErrorMessage from '@/Error/ErrorMessage';
import { getRegexType } from '@/utils/LoginForm/checkInputValidation';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

type Props = {
  type: 'password' | 'birth';
  labelName: string;
  errMsg: string;
};

export type InputHandler = {
  getInputValue: () => string | undefined;
};

export default forwardRef<InputHandler, Props>(function SignUpInput(
  { type, labelName, errMsg },
  ref,
) {
  const inputRegex = useMemo(() => getRegexType(type), [type]);
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputClass = (isFocused || inputValue.length > 0) && 'border-blue-500';
  const [showErrMsg, setShowErrMsg] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      getInputValue: () => {
        if (!showErrMsg && !!inputValue.length) return inputValue;

        return undefined;
      },
    }),
    [inputValue, showErrMsg],
  );

  useEffect(() => {
    if (inputValue.length !== 0 && !inputRegex.test(inputValue)) {
      setShowErrMsg(true);
      setIsActive(true);
    }
    if (inputRegex.test(inputValue)) {
      setShowErrMsg(false);
    }
  }, [inputRegex, inputValue, type]);

  useEffect(() => {
    if (isActive && !inputValue.length && !inputRegex.test(inputValue)) {
      setShowErrMsg(true);
    }
  }, [inputRegex, inputValue, isActive]);

  return (
    <>
      <div className="flex w-full flex-col">
        <label
          htmlFor="password-field"
          className="mb-1 font-semibold text-gray-600"
        >
          {labelName}
        </label>
        <input
          id={`${type}-field`}
          type={type === 'password' ? 'password' : 'text'}
          placeholder={type === 'birth' ? 'YYYY-MM-DD' : type}
          className={`mb-2 border-b-2 py-2 ${inputClass}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <ErrorMessage
        errMessage={errMsg}
        errClass="text-right"
        isError={showErrMsg}
      />
    </>
  );
});
