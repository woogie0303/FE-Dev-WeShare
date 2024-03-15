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
  longitude: number;
  latitude: number;
}

interface EditListItem {
  title: string;
  time: string;
  memo: string;
  expense: number;
  latitude: number;
  longitude: number;
}

interface VisitDatesType<T> {
  travelDate: string;
  visitPlaces: T[];
}

interface MapMarkerType {
  latitude: number;
  longitude: number;
}
