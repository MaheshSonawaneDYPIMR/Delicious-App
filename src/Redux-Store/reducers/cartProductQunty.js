import {
  FETCH_PRODUCT_QUANTITY_FAILURE,
  FETCH_PRODUCT_QUANTITY_SUCCESS,
  FETCH_PRODUCT_QUANTITY_REQUEST,
} from "../constants/constants";


const initialState = {
  loading: false,
  quantity: null,
  error: null,
};

const productQuantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_QUANTITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCT_QUANTITY_SUCCESS:
      return {
        ...state,
        loading: false,
        quantity: action.payload,
        error: null,
      };
    case FETCH_PRODUCT_QUANTITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productQuantityReducer;