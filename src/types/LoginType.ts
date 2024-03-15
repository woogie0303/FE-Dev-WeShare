interface ResponseLogin {
  user: string;
  accessToken: string;
}

interface EmailInput {
  emailInput: string;
}

interface AuthState {
  user: string | null;
  token: string | null;
}

interface LoginForm {
  email: string;
  password: string;
  birthDate?: string;
}

interface OauthLogin {
  code: string;
  identityProvider: string;
}

export type { ResponseLogin, EmailInput, AuthState, LoginForm, OauthLogin };
