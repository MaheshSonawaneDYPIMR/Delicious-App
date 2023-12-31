import {
  FETCH_TOTAL_PRODUCT_QUANTITY_FAILURE,
  FETCH_FULL_CART_DATA_SUCCESS,
  FETCH_TOTAL_PRODUCT_QUANTITY_SUCCESS,
  FETCH_TOTAL_PRODUCT_QUANTITY_REQUEST,
} from "../constants/constants";

export const fetchTotalProductQuantityRequest = (userId) => ({
  type: FETCH_TOTAL_PRODUCT_QUANTITY_REQUEST,
  payload: { userId },
});

export const fetchTotalProductQuantitySuccess = (totalQuantity) => ({
  type: FETCH_TOTAL_PRODUCT_QUANTITY_SUCCESS,
  payload: totalQuantity,
});

export const fetchTotalProductQuantityFailure = (error) => ({
  type: FETCH_TOTAL_PRODUCT_QUANTITY_FAILURE,
  payload: error,
});

export const fetchFullCartDataSuccess = (cartData) => ({
  type: FETCH_FULL_CART_DATA_SUCCESS,
  payload: cartData,
});
