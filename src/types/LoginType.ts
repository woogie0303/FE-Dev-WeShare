interface AuthStateType {
  user: string | undefined;
  accessToken: string | undefined;
}

interface LoginFormType {
  email: string;
  password: string;
  birthDate?: string;
}

interface OauthLogin {
  code: string;
  identityProvider: string;
}

export type { AuthStateType, LoginFormType, OauthLogin };
