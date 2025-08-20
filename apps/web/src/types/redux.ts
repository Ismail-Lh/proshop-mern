import { Product, CartItem, ShippingAddress, User } from './index';

// Product State
export interface ProductListState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface ProductDetailsState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

// User State
export interface UserLoginState {
  userInfo: User | null;
  loading: boolean;
  error: string | null;
}

export interface UserRegisterState {
  userInfo: User | null;
  loading: boolean;
  error: string | null;
}

export interface UserDetailsState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface UserUpdateProfileState {
  userInfo: User | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

// Cart State
export interface CartState {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress | null;
  paymentMethod: string | null;
}

// Root State
export interface RootState {
  productList: ProductListState;
  productDetails: ProductDetailsState;
  cart: CartState;
  userLogin: UserLoginState;
  userRegister: UserRegisterState;
  userDetails: UserDetailsState;
  userUpdateProfile: UserUpdateProfileState;
}

// Redux Action Types
export interface Action<T = any> {
  type: string;
  payload?: T;
}
