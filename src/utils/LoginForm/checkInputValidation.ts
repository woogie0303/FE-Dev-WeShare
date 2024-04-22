import { LoginFormType } from '@/types/LoginType';

const getRegexType = (type: 'email' | 'password' | 'birth' | 'userName') => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^.{8,12}$/;
  const birthRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|10|20|3[01])$/;
  const userNameRegex = /^.{3,20}$/;

  switch (type) {
    case 'email':
      return emailRegex;
      break;
    case 'password':
      return passwordRegex;
      break;
    case 'birth':
      return birthRegex;
      break;
    case 'userName':
      return userNameRegex;
      break;
    default:
      throw new Error('정해진 인풋타입이 아닙니다.');
  }
};

const checkValidSignInput = (
  credential: Record<keyof LoginFormType, string | undefined>,
) => {
  const credentialKeys = Object.keys(credential) as Array<keyof LoginFormType>;
  const credentialValues = Object.values(credential).filter(
    (item): item is string => item !== undefined,
  );

  if (credentialValues.length !== Object.values(credential).length)
    return undefined;

  const validCredential = credentialKeys.reduce((acc, key, index) => {
    acc[key] = credentialValues[index];
    return acc;
  }, {} as LoginFormType);

  return validCredential;
};

export { getRegexType, checkValidSignInput };
