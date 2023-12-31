import { all } from "redux-saga/effects";

import { watchLogin,watchRegister } from "../sagas/auth";
import { watchGetUser } from "../sagas/getUser";
import { watchFetchProducts } from "../sagas/getProducts";
import watchAddToUserCart from "../sagas/cart";
import watchFetchProductQuantity from "../sagas/cartProductQnty";
import watchFetchTotalProductQuantity from "../sagas/cartItemsQ";
import { watchRemoveFromUserCart } from "../sagas/cartRemove";
import productSaga from "../sagas/like";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchRegister(),
    watchGetUser(),
    watchFetchProducts(),
    watchAddToUserCart(),
   watchFetchProductQuantity(),
   watchFetchTotalProductQuantity(),
   watchRemoveFromUserCart(),
   productSaga(),
    // Add other sagas here if needed
  ]);
}