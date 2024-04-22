import { useLazyDoubleCheckInputQuery } from '@/store/auth/authApi.slice';
import { getRegexType } from '@/utils/LoginForm/checkInputValidation';
import { ChangeEventHandler, useEffect, useMemo, useState } from 'react';

const useDoubleCheckInput = (type: 'email' | 'userName') => {
  const [doubleCheckInput] = useLazyDoubleCheckInputQuery();
  const inputRegex = useMemo(() => getRegexType(type), [type]);
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [doubleCheckErrMsg, setDoubleCheckErrMsg] = useState('');
  const [showInputErrMsg, setShowInputErrMsg] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };
  const checkDuplicateInput = async () => {
    if (inputValue.length === 0) {
      setShowInputErrMsg(true);
    }

    try {
      if (inputValue.length !== 0 && !showInputErrMsg) {
        await doubleCheckInput({
          type,
          inputValue,
        }).unwrap();
        setDoubleCheckErrMsg('');
      }
    } catch {
      setDoubleCheckErrMsg('중복 되었습니다. 다시 확인해주세요.');
    }
  };

  useEffect(() => {
    if (!inputRegex.test(inputValue) && !!inputValue.length) {
      setShowInputErrMsg(true);
      setDoubleCheckErrMsg('');
      setIsActive(true);
    }

    if (inputRegex.test(inputValue)) {
      setShowInputErrMsg(false);
      setDoubleCheckErrMsg('중복확인을 해주세요');
    }
  }, [inputValue, inputRegex]);

  useEffect(() => {
    if (isActive && !inputValue.length && !inputRegex.test(inputValue)) {
      setShowInputErrMsg(true);
      setDoubleCheckErrMsg('');
    }
  }, [isActive, inputValue, inputRegex]);

  return {
    checkDuplicateInput,
    doubleCheckErrMsg,
    handleChange,
    inputValue,
    showInputErrMsg,
  };
};

export { useDoubleCheckInput };
