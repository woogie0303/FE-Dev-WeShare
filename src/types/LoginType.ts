interface AuthStateType {
  userName: string | undefined;
  accessToken: string | undefined;
}

interface LoginFormType {
  email: string;
  password: string;
  birthDate?: string;
  name?: string;
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

export type { AuthStateType, LoginFormType, OauthLogin, ChangePasswordType };
