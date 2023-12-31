import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
 
} from "../constants/constants";


export const addToCartRequest = (userId, productId) => ({
  type: ADD_TO_CART_REQUEST,
  payload: { userId, productId},
});


export const addToCartSuccess = () => ({
  type: ADD_TO_CART_SUCCESS,
});

export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});
