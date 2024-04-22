import { forwardRef, useImperativeHandle, useState } from 'react';
import { useDoubleCheckInput } from '@/hooks/Login/useDoubleCheckInput';
import { InputHandler } from './SignUpInput';
import DuplicateCheckAlert from './DuplicateCheckAlert';

type Props = {
  type: 'email' | 'userName';
  labelName: string;
  errMsg: string;
};

export default forwardRef<InputHandler, Props>(function DuplicateCheckInput(
  { type, labelName, errMsg },
  ref,
) {
  const {
    checkDuplicateInput,
    doubleCheckErrMsg,
    handleChange,
    inputValue,
    showInputErrMsg,
  } = useDoubleCheckInput(type);
  const [isFocused, setIsFocused] = useState(false);
  const inputClass = (isFocused || inputValue.length > 0) && 'border-blue-500';

  useImperativeHandle(
    ref,
    () => ({
      getInputValue: () => {
        if (
          !doubleCheckErrMsg.length &&
          !showInputErrMsg &&
          !!inputValue.length
        )
          return inputValue;

        return undefined;
      },
    }),
    [doubleCheckErrMsg.length, inputValue, showInputErrMsg],
  );

  return (
    <div className="flex w-full flex-col">
      <label htmlFor={type} className="mb-1 font-semibold text-gray-600">
        {labelName}
      </label>
      <div className={`flex justify-between border-b-2 mb-2 ${inputClass}`}>
        <input
          id={type}
          type="text"
          placeholder={type === 'email' ? 'email' : 'user-name'}
          className="w-2/3"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete="off"
          onChange={handleChange}
        />
        <button
          type="button"
          className="rounded bg-blue-600 p-2 text-sm font-medium text-white mb-1"
          onClick={() => checkDuplicateInput()}
        >
          중복 확인
        </button>
      </div>
      <DuplicateCheckAlert
        type={type}
        showInputErrMsg={showInputErrMsg}
        doubleCheckErrMsg={doubleCheckErrMsg}
        inputValue={inputValue}
        errMsg={errMsg}
      />
    </div>
  );
});
