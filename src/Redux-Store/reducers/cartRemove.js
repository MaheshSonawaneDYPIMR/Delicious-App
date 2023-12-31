import { REMOVE_FROM_CART_FAILURE,REMOVE_FROM_CART_SUCCESS } from "../constants/constants";

const initialState = {
  loading: false,
  error: null,
};

const cartRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartRemoveReducer;