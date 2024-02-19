interface AuthState {
  user: string | null;
  token: string | null;
}

interface LoginForm {
  email: string;
  password: string;
  birth?: string;
}

interface OauthLogin {
  code: string;
  identityProvider: string;
}

interface ResponseLogin {
  user: string;
  accessToken: string;
}

interface EmailInput {
  emailInput: string;
}

interface TPosts {
  title: string;
  user: {
    id: string;
    profilePath: string;
  };
  price: number;
  likeNum: number;
  commentNum: number;
  imageUrl: string;
}
