import {
  FETCH_TOTAL_PRODUCT_QUANTITY_FAILURE,
  FETCH_TOTAL_PRODUCT_QUANTITY_SUCCESS,
  FETCH_TOTAL_PRODUCT_QUANTITY_REQUEST,
  FETCH_FULL_CART_DATA_SUCCESS,
} from "../constants/constants";


const initialState = {
  loading: false,
  totalQuantity: 0,
  error: null,
  fullCartData: [], // Initialize as an empty array
};

const totalProductQuantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOTAL_PRODUCT_QUANTITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TOTAL_PRODUCT_QUANTITY_SUCCESS:
      return {
        ...state,
        loading: false,
        totalQuantity: action.payload,
        error: null,
      };
    case FETCH_TOTAL_PRODUCT_QUANTITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_FULL_CART_DATA_SUCCESS:
      return {
        ...state,
        fullCartData: action.payload, // Store the full cart data in your state
      };
    default:
      return state;
  }
};

export default totalProductQuantityReducer;