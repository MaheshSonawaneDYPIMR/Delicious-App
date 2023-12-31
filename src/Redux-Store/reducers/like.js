import {
  LIKE_PRODUCT_SUCCESS,
  DISLIKE_PRODUCT_SUCCESS,
} from "../constants/constants.js";

const initialState = {
  likedProducts: [],
};

const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_PRODUCT_SUCCESS:
      const likedProductId = action.payload.productId;
      // Add the liked product ID to the likedProducts array if it doesn't exist
      if (!state.likedProducts.includes(likedProductId)) {
        return {
          ...state,
          likedProducts: [...state.likedProducts, likedProductId],
        };
      }
      // If the product ID already exists, return the state as is
      return state;

    case DISLIKE_PRODUCT_SUCCESS:
      const dislikedProductId = action.payload.productId;
      // Remove the disliked product ID from the likedProducts array
      return {
        ...state,
        likedProducts: state.likedProducts.filter(
          (productId) => productId !== dislikedProductId
        ),
      };

    default:
      return state;
  }
};

export default likedReducer;
