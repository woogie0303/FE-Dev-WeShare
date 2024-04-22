interface AuthStateType {
  userName: string;
  accessToken: string;
}
type DoubleCheckInput = {
  type: 'email' | 'userName';
  inputValue: string;
};

interface LoginFormType {
  email: string;
  password: string;
  birthDate?: string;
  userName?: string;
}

interface OauthLogin {
  code: string;
  identityProvider: string;
}

interface ChangePasswordType {
  oldPassword: string;
  newPassword: string;
  verifyPassword: string;
}

export type {
  AuthStateType,
  LoginFormType,
  OauthLogin,
  ChangePasswordType,
  DoubleCheckInput,
};
