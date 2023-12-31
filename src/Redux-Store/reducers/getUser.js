// userReducer.js

import { GET_USER_SUCCESS, GET_USER_FAILURE } from "../constants/constants.js";

const initialState = {
  userData: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload.userData,
        error: null,
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        userData: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default userReducer;
