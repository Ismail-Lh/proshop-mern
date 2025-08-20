import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';

import { cartReducer } from './reducers/cartReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateReducer,
} from './reducers/userReducers';
import { RootState } from './types/redux';
import { CartItem, ShippingAddress, User } from './types';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateReducer,
});

const cartItemsFromStorage: CartItem[] = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems')!)
  : [];

const userInfoFromStorage: User | null = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')!)
  : null;

const shippingAddressFromStorage: ShippingAddress | null = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress')!)
  : null;

const initialState: Partial<RootState> = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: null,
  },
  userLogin: { userInfo: userInfoFromStorage, loading: false, error: null },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
