'use client';

import useInput from '@/hooks/useInput';
import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import ErrorMessage from '@/Error/ErrorMessage';
import {
  useLazyCheckEmailQuery,
  useSignUpMutation,
} from '@/store/auth/authApi.slice';

const labelClass = 'mb-1 font-semibold text-gray-600';
const inputClass = 'mb-4 border-b-2 py-2';

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

type Props = {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignUp({ setShowSignIn }: Props) {
  const [activeSignUpBtn, setActiveSignUpBtn] = useState<boolean>(false);
  const [emailDoubleCheck, setEmailDoubleCheck] = useState<boolean>(false);
  const [userNameDoubleCheck, setUserNameDoubleCheck] =
    useState<boolean>(false);
  const [emailDoubleCheckErrMsg, setEmailDoubleCheckErrMsg] =
    useState<string>('');
  const [userNameDoubleCheckErrMsg, setUserNameDoubleCheckErrMsg] =
    useState<string>('');
  const [lazyCheckEmail] = useLazyCheckEmailQuery();
  const emailInput = useInput('email');
  const userNameInput = useInput('userName');
  const passwordInput = useInput('password');
  const birthInput = useInput('birth');

  const [signUp, { isSuccess }] = useSignUpMutation();

  const handleDuplicateBtn = async (doubleCheckInput: Input) => {
    try {
      if (
        doubleCheckInput.type === 'email' &&
        (doubleCheckInput.inputErrMessage ||
          doubleCheckInput.inputValue.length === 0)
      ) {
        setEmailDoubleCheck(false);
        setEmailDoubleCheckErrMsg('이메일 형식이 잘못됐습니다');
        return;
      }
      if (
        doubleCheckInput.type === 'userName' &&
        (doubleCheckInput.inputErrMessage ||
          doubleCheckInput.inputValue.length === 0)
      ) {
        setUserNameDoubleCheck(false);
        setUserNameDoubleCheckErrMsg('닉네임은 20글자 이하여야 합니다.');
        return;
      }

      if (doubleCheckInput.type === 'userName') {
        const res = await lazyCheckEmail({
          type: 'name',
          inputValue: doubleCheckInput.inputValue,
        });
        if (res.error) {
          setUserNameDoubleCheckErrMsg('이미 존재하는 닉네임 입니다.');
          return;
        }
      }
      if (doubleCheckInput.type === 'email') {
        const res = await lazyCheckEmail({
          type: 'email',
          inputValue: doubleCheckInput.inputValue,
        });
        if (res.error) {
          setEmailDoubleCheckErrMsg('이미 존재하는 이메일 입니다.');
          return;
        }
      }

      if (doubleCheckInput.type === 'email') {
        setEmailDoubleCheckErrMsg('');
        setEmailDoubleCheck(true);
      }

      if (doubleCheckInput.type === 'userName') {
        setUserNameDoubleCheckErrMsg('');
        setUserNameDoubleCheck(true);
      }
    } catch (err) {
      if (doubleCheckInput.type === 'email') {
        setEmailDoubleCheck(false);
        setEmailDoubleCheckErrMsg('중복된 이메일 입니다.');
      }

      if (doubleCheckInput.type === 'userName') {
        setUserNameDoubleCheck(false);
        setUserNameDoubleCheckErrMsg('중복된 이메일 입니다.');
      }
    }
  };

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      await signUp({
        email: emailInput.inputValue,
        password: passwordInput.inputValue,
        birthDate: birthInput.inputValue,
        name: userNameInput.inputValue,
      });
    } catch (err) {
      throw new Error('다시 시도해주세요');
    }
  };

  useEffect(() => {
    if (
      emailInput.inputValue.length === 0 ||
      passwordInput.inputValue.length === 0 ||
      birthInput.inputValue.length === 0 ||
      !emailDoubleCheck ||
      !userNameDoubleCheck ||
      birthInput.inputErrMessage ||
      passwordInput.inputErrMessage
    ) {
      setActiveSignUpBtn(false);
    } else {
      setActiveSignUpBtn(true);
    }
  }, [
    emailInput,
    passwordInput,
    birthInput,
    emailDoubleCheck,
    userNameDoubleCheck,
  ]);

  useEffect(() => {
    if (emailInput.inputValue.length) {
      setEmailDoubleCheck(false);
      setEmailDoubleCheckErrMsg('중복 확인 해주세요');
    }
  }, [emailInput.inputValue]);
  useEffect(() => {
    if (userNameInput.inputValue.length) {
      setUserNameDoubleCheck(false);
      setUserNameDoubleCheckErrMsg('중복 확인 해주세요');
    }
  }, [userNameInput.inputValue]);

  return isSuccess ? (
    <div className="flex w-[25rem] bg-white h-[40rem] mx-auto flex-col items-center justify-evenly">
      <h2 className="text-center text-4xl font-bold text-blue-500">
        회원가입 완료
      </h2>
      <p className="text-2xl font-bold text-blue-200">
        <span className="mx-2 text-blue-500 ">weShare,</span>
        함께 나눠봐요
      </p>

      <button
        type="button"
        className=" mb-6 mt-8  w-[10rem] rounded-3xl bg-blue-200 py-3 font-semibold leading-8 text-white transition duration-500 ease-in-out hover:bg-blue-500"
        onClick={() => setShowSignIn(true)}
      >
        로그인하러 가기
      </button>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex h-[40rem] w-[25rem] flex-col items-center justify-between rounded-[4rem] border-2 border-solid px-10 py-10"
    >
      <h1 className="mb-6 text-2xl font-bold ">회원가입</h1>
      <h2 className="text-1xl mb-8 font-semibold text-gray-400">
        <span className="mx-1 text-blue-500">WE,</span> 저희와 함께해요
      </h2>
      <fieldset className="w-[20rem]">
        <div className="relative flex w-full flex-col ">
          <label htmlFor="userName" className={`${labelClass} `}>
            유저 닉네임
          </label>
          <input
            id="userName"
            value={userNameInput.inputValue}
            type="text"
            placeholder="Email"
            className={`${inputClass} ${userNameInput.inputClass}`}
            onFocus={userNameInput.handleFocus}
            onBlur={userNameInput.handleFocus}
            onChange={userNameInput.handleChange}
          />
          {userNameDoubleCheck && (
            <p className="absolute bottom-[-15px] right-0 text-right text-green-600">
              사용가능한 닉네임 입니다.
            </p>
          )}
          {userNameDoubleCheckErrMsg.length !== 0 && (
            <ErrorMessage
              errMessage={userNameDoubleCheckErrMsg}
              errClass="text-right"
            />
          )}
          <button
            type="button"
            className="absolute right-0 top-7 rounded bg-blue-600 p-2 text-sm font-medium text-white"
            onClick={() => handleDuplicateBtn(userNameInput)}
          >
            중복 확인
          </button>
        </div>
        <div className="relative flex w-full flex-col ">
          <label htmlFor="email" className={`${labelClass} `}>
            이메일
          </label>
          <input
            id="email"
            value={emailInput.inputValue}
            type="text"
            placeholder="Email"
            className={`${inputClass} ${emailInput.inputClass}`}
            onFocus={emailInput.handleFocus}
            onBlur={emailInput.handleFocus}
            onChange={emailInput.handleChange}
          />
          {emailDoubleCheck && (
            <p className="absolute bottom-[-15px] right-0 text-right text-green-600">
              사용가능한 이메일 입니다.
            </p>
          )}
          {emailDoubleCheckErrMsg.length !== 0 && (
            <ErrorMessage
              errMessage={emailDoubleCheckErrMsg}
              errClass="text-right"
            />
          )}
          <button
            type="button"
            className="absolute right-0 top-7 rounded bg-blue-600 p-2 text-sm font-medium text-white"
            onClick={() => handleDuplicateBtn(emailInput)}
          >
            중복 확인
          </button>
        </div>
        <div className="relative flex w-full flex-col">
          <label htmlFor="password-field" className={labelClass}>
            비밀번호
          </label>
          <input
            id="password-field"
            type="password"
            placeholder="password"
            className={`${inputClass} ${passwordInput.inputClass}`}
            onFocus={passwordInput.handleFocus}
            onBlur={passwordInput.handleFocus}
            onChange={passwordInput.handleChange}
          />
          {passwordInput.inputErrMessage && (
            <ErrorMessage
              errMessage="비밀번호는 8~12 자리이여야 합니다"
              errClass="text-right"
            />
          )}
        </div>
        <div className="relative flex w-full flex-col">
          <label htmlFor="birthday" className={labelClass}>
            생년월일
          </label>
          <input
            id="birthday"
            type="text"
            placeholder="YYYY-MM-DD"
            className={`${inputClass} ${birthInput.inputClass}`}
            onFocus={birthInput.handleFocus}
            onBlur={birthInput.handleFocus}
            onChange={birthInput.handleChange}
          />
          {birthInput.inputErrMessage && (
            <ErrorMessage
              errMessage="올바른 형식이 아닙니다"
              errClass="text-right"
            />
          )}
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={!activeSignUpBtn}
        className={`${activeSignUpBtn ? 'bg-blue-500' : ''} mb-6 mt-8 h-10 w-[10rem] rounded-3xl bg-blue-200 leading-8 text-white transition duration-500 ease-in-out`}
      >
        완료
      </button>
    </form>
  );
}
