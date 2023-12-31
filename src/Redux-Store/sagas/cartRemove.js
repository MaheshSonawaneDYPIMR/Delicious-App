import { takeLatest, put } from "redux-saga/effects";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import {
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from '../constants/constants.js'

import { removeFromCartSuccess,removeFromCartFailure } from "../Actions/cartRemove";
import { db } from "../../config/firebase.js";

function* removeFromUserCart(action) {
  try {
    const { userId, productId } = action.payload;
    console.log("1. Inside removeFromUserCart saga");

    if (userId && productId) {
      console.log("2. User ID and Product ID present");
      const userDocRef = doc(db, "users", userId);
      const userDocSnapshot = yield getDoc(userDocRef);
      const userData = userDocSnapshot.data();

      let cart = userData.cart || [];

      const existingProductIndex = cart.findIndex(
        (item) => item.productId === productId
      );

      if (existingProductIndex !== -1) {
        console.log("3. Product found in cart");
        if (cart[existingProductIndex].quantity > 1) {
          cart[existingProductIndex].quantity -= 1;
        } else {
          cart.splice(existingProductIndex, 1);
        }

        yield updateDoc(userDocRef, { cart });
        yield put(removeFromCartSuccess());
      } else {
        console.log("4. Product not found in cart");
        throw new Error("Product not found in cart");
      }
    } else {
      console.log("5. Missing userId or productId");
      throw new Error("Missing userId or productId");
    }
  } catch (error) {
    console.log("6. Error occurred:", error);
    yield put(removeFromCartFailure(error));
  }
}

export function* watchRemoveFromUserCart() {
  yield takeLatest(REMOVE_FROM_CART_REQUEST, removeFromUserCart);
}
