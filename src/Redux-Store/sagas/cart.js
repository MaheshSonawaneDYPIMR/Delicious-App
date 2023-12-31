import { call, put, takeLatest } from "redux-saga/effects";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { ADD_TO_CART_REQUEST } from "../constants/constants";
import { addToCartSuccess, addToCartFailure } from "../Actions/cart";
import { db } from "../../config/firebase";
import { getDoc } from "firebase/firestore";


function* addToUserCart(action) {
  try {
    const { userId, productId } = action.payload;
    console.log("addTouseCartSaga  1")
    if (userId && productId) {
      console.log("addTouseCartSaga  2");
      const userDocRef = doc(db, "users", userId);

      const userDocSnapshot = yield getDoc(userDocRef);
      const userData = userDocSnapshot.data();

      let cart = userData.cart || [];

      const existingProductIndex = cart.findIndex(
        (item) => item.productId === productId
      );

      if (existingProductIndex !== -1) {
        console.log("addTouseCartSaga  3");
        // If the product exists in the cart, increment its quantity
        cart[existingProductIndex].quantity += 1;
      } else {
        console.log("addTouseCartSaga  4");
        // If the product doesn't exist, add it to the cart with quantity 1
        cart.push({ productId, quantity: 1 });
      }

      // If the cart field didn't exist previously, create it in the user's data
      if (!userData.cart) {
        console.log("addTouseCartSaga  5");
        yield updateDoc(userDocRef, { cart });
      } else {
        console.log("addTouseCartSaga  6");
        // Update the existing cart with the updated product information
        yield updateDoc(userDocRef, { cart });
      }

      yield put(addToCartSuccess());
    } else {
      console.log("7");
      throw new Error("Missing userId or productId");
    }
  } catch (error) {
    console.log("addTouseCartSaga  6",error);
    yield put(addToCartFailure(error));
  }
}



function* watchAddToUserCart() {
  yield takeLatest(ADD_TO_CART_REQUEST, addToUserCart);
}

export default watchAddToUserCart;
