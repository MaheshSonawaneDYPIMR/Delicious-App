import { FETCH_PRODUCT_QUANTITY_FAILURE,FETCH_PRODUCT_QUANTITY_SUCCESS,FETCH_PRODUCT_QUANTITY_REQUEST } from "../constants/constants";


export const fetchProductQuantityRequest = (userId, productId) => ({
  type: FETCH_PRODUCT_QUANTITY_REQUEST,
  payload: { userId, productId },
});

export const fetchProductQuantitySuccess = (quantity) => ({
  type: FETCH_PRODUCT_QUANTITY_SUCCESS,
  payload: quantity,
});

export const fetchProductQuantityFailure = (error) => ({
  type: FETCH_PRODUCT_QUANTITY_FAILURE,
  payload: error,
});
