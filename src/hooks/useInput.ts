import React, {
  ChangeEventHandler,
  FocusEventHandler,
  useState,
  useEffect,
  useRef,
} from 'react';

type InputType = 'email' | 'password' | 'birth' | 'userName';

interface Input {
  inputValue: string;
  labelClass: string;
  inputClass: string;
  isFocused: boolean;
  inputErrMessage: boolean;
  handleFocus: FocusEventHandler;
  handleChange: ChangeEventHandler;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
  type: InputType;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^.{8,12}$/;
const birthRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|10|20|3[01])$/;
const userNameRegex = /^.{1,20}$/;

const useInput = (type: InputType): Input => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputErrMessage, setInputErrorMessage] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.type === 'focus') {
      setIsFocused(true);
    }

    if (e.type === 'blur') {
      setIsFocused(false);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const labelClass =
    isFocused || inputValue.length > 0
      ? 'top-[-10px] text-sm text-blue-500 font-bold'
      : 'top-5 text-gray-300';

  const inputClass =
    isFocused || inputValue.length > 0 ? 'border-blue-500' : '';

  useEffect(() => {
    let regexType: RegExp;

    switch (type) {
      case 'email':
        regexType = emailRegex;
        break;
      case 'password':
        regexType = passwordRegex;
        break;
      case 'birth':
        regexType = birthRegex;
        break;
      case 'userName':
        regexType = userNameRegex;
        break;
      default:
        throw new Error('input 타입을 잘못 설정했습니다');
    }

    if (type) {
      if (
        (isFocused && inputValue.length !== 0 && !regexType.test(inputValue)) ||
        (!isFocused && inputValue.length !== 0 && !regexType.test(inputValue))
      ) {
        setInputErrorMessage(true);
      } else {
        setInputErrorMessage(false);
      }
    }
  }, [inputValue, isFocused, type]);

  return {
    inputValue,
    labelClass,
    inputClass,
    isFocused,
    inputErrMessage,
    handleFocus,
    handleChange,
    setInputValue,
    inputRef,
    type,
  };
};

export default useInput;
