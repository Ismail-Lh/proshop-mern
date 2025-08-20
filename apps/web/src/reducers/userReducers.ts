import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from '../constants/userConstants';
import { 
  UserLoginState, 
  UserRegisterState, 
  UserDetailsState, 
  UserUpdateProfileState, 
  Action 
} from '../types/redux';

export const userLoginReducer = (
  state: UserLoginState = { userInfo: null, loading: false, error: null }, 
  action: Action
): UserLoginState => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userInfo: null, error: null };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload, error: null };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload, userInfo: null };
    case USER_LOGOUT:
      return { userInfo: null, loading: false, error: null };
    default:
      return state;
  }
};

export const userRegisterReducer = (
  state: UserRegisterState = { userInfo: null, loading: false, error: null }, 
  action: Action
): UserRegisterState => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, userInfo: null, error: null };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload, error: null };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload, userInfo: null };
    default:
      return state;
  }
};

export const userDetailsReducer = (
  state: UserDetailsState = { user: null, loading: false, error: null }, 
  action: Action
): UserDetailsState => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload, error: null };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload, user: null };
    default:
      return state;
  }
};

export const userUpdateReducer = (
  state: UserUpdateProfileState = { userInfo: null, loading: false, error: null, success: false }, 
  action: Action
): UserUpdateProfileState => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true, userInfo: null, error: null, success: false };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload, error: null };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload, userInfo: null, success: false };
    default:
      return state;
  }
};
