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

interface SearchPlace {
  address_name: string;
  category_group_code?: string;
  category_group_name?: string;
  category_name?: string;
  distance?: string;
  id?: string;
  phone?: string;
  place_name: string;
  place_url?: string;
  road_address_name: string;
  x: string;
  y: string;
}

interface SelectedPlaceType {
  title: string;
  longitude: string;
  latitude: string;
}

interface EditListItem {
  title: string;
  time: string;
  memo: string;
  expense: number;
  latitude: string;
  longitude: string;
}

interface VisitDatesType<T> {
  travelDate: string;
  visitPlaces: T[];
}
