import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga.js";
import authReducer from "../reducers/auth.js";
import themeReducer from "../reducers/reducers.js";
import userReducer from "../reducers/getUser.js";
import productsReducer from "../reducers/getProduct.js";
import cartReducer from "../reducers/cart.js";
import productQuantityReducer from "../reducers/cartProductQunty.js";
import totalProductQuantityReducer from "../reducers/cartItemsQ.js";
import cartRemoveReducer from "../reducers/cartRemove.js";
import likedReducer from "../reducers/like.js";
const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  user: userReducer,
  products: productsReducer,
  cart:cartReducer,
  productQuantity: productQuantityReducer,
  cartItems: totalProductQuantityReducer,
  cartRemove:cartRemoveReducer,
  like:likedReducer,
  // Add more reducers if needed
});

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store with middleware and run sagas
const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  
  sagaMiddleware.run(rootSaga); // Run additional sagas here
  return store;
};

export default configureStore;
