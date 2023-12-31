// actions/products.js
import {
  LIKE_PRODUCT_REQUEST,
  LIKE_PRODUCT_SUCCESS,
  LIKE_PRODUCT_FAILURE,
  DISLIKE_PRODUCT_REQUEST,
  DISLIKE_PRODUCT_SUCCESS,
  DISLIKE_PRODUCT_FAILURE,
} from "../constants/constants.js";

export const likeProductRequest = (userId, productId) => ({
  type: LIKE_PRODUCT_REQUEST,
  payload: { userId, productId },
});

export const likeProductSuccess = () => ({
  type: LIKE_PRODUCT_SUCCESS,
});

export const likeProductFailure = (error) => ({
  type: LIKE_PRODUCT_FAILURE,
  payload: { error },
});

export const dislikeProductRequest = (userId, productId) => ({
  type: DISLIKE_PRODUCT_REQUEST,
  payload: { userId, productId },
});

export const dislikeProductSuccess = () => ({
  type: DISLIKE_PRODUCT_SUCCESS,
});

export const dislikeProductFailure = (error) => ({
  type: DISLIKE_PRODUCT_FAILURE,
  payload: { error },
});
