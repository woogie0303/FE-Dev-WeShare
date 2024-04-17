import ErrorMessage from '@/Error/ErrorMessage';
import React from 'react';

type Props = {
  type: 'email' | 'userName';
  showInputErrMsg: boolean;
  doubleCheckErrMsg: string;
  errMsg: string;
  inputValue: string;
};

export default function DuplicateCheckAlert({
  type,
  showInputErrMsg,
  doubleCheckErrMsg,
  errMsg,
  inputValue,
}: Props) {
  return (
    <>
      {!doubleCheckErrMsg.length && !showInputErrMsg && !!inputValue.length && (
        <p className="text-right text-green-600">
          {type === 'email'
            ? '사용가능한 이메일 입니다'
            : '사용가능한 닉네임 입니다'}
        </p>
      )}
      {!!doubleCheckErrMsg.length && (
        <ErrorMessage
          errMessage={doubleCheckErrMsg}
          errClass="text-right"
          isError={!!doubleCheckErrMsg.length}
        />
      )}
      {showInputErrMsg && (
        <ErrorMessage
          errMessage={errMsg}
          errClass="text-right"
          isError={showInputErrMsg}
        />
      )}
    </>
  );
}
