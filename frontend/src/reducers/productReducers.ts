import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';
import { ProductListState, ProductDetailsState, Action } from '../types/redux';

export const productListReducer = (
  state: ProductListState = { products: [], loading: false, error: null },
  action: Action
): ProductListState => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [], error: null };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload, error: null };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state: ProductDetailsState = { product: null, loading: false, error: null },
  action: Action
): ProductDetailsState => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: null, error: null };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload, error: null };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload, product: null };
    default:
      return state;
  }
};
