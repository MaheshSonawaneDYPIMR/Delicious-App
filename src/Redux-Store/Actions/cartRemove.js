// cartActions.js

import {
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from "../constants/constants.js";

export const removeFromCartRequest = (userId, productId) => ({
  type: REMOVE_FROM_CART_REQUEST,
  payload: { userId, productId },
});

export const removeFromCartSuccess = () => ({
  type: REMOVE_FROM_CART_SUCCESS,
});

export const removeFromCartFailure = (error) => ({
  type: REMOVE_FROM_CART_FAILURE,
  payload: error,
});
