import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../constants/constants.js'


export const getUserRequest = (userId) => ({
  type: GET_USER_REQUEST,
  payload: { userId },
});

export const getUserSuccess = (userData) => ({
  type: GET_USER_SUCCESS,
  payload: { userData },
});

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: { error },
});