import { put, call, takeLatest, all } from "redux-saga/effects";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

import {
  likeProductFailure,
  likeProductSuccess,
  dislikeProductSuccess,
  dislikeProductFailure,
} from "../Actions/like";
import {
  LIKE_PRODUCT_REQUEST,
  DISLIKE_PRODUCT_REQUEST,
} from "../constants/constants";
import { db } from "../../config/firebase";
 

function* likeProduct(action) {
  try {
   const { userId, productId } = action.payload || {};
   console.log("userId:", userId, "productId:", productId);

    console.log("Like Product Saga: Started");

    const userRef = doc(db, "users", userId);
    const userDoc = yield getDoc(userRef);

    if (userDoc.exists()) {
      console.log("Like Product Saga: User exists");
      const userData = userDoc.data();
      let likedProducts = userData.likedProducts || [];

      const existingIndex = likedProducts.indexOf(productId);

      if (existingIndex !== -1) {
        console.log("Like Product Saga: Product already liked, removing");
        likedProducts = likedProducts.filter((id) => id !== productId);
      } else {
        console.log("Like Product Saga: Liking the product");
        likedProducts.push(productId);
      }

      yield updateDoc(userRef, { likedProducts });
      yield put(likeProductSuccess());
    } else {
      console.log("Like Product Saga: User not found");
      yield put(likeProductFailure("User not found"));
    }
  } catch (error) {
    console.log("Like Product Saga: Error", error);
    yield put(likeProductFailure(error));
  }
}

function* dislikeProduct(action) {
  try {
    const { userId, productId } = action.payload;

    console.log("Dislike Product Saga: Started");

    const userRef = doc(db, "users", userId);
    const userDoc = yield getDoc(userRef);

    if (userDoc.exists()) {
      console.log("Dislike Product Saga: User exists");
      const userData = userDoc.data();
      let likedProducts = userData.likedProducts || [];

      likedProducts = likedProducts.filter((id) => id !== productId);

      yield updateDoc(userRef, { likedProducts });
      yield put(dislikeProductSuccess());
    } else {
      console.log("Dislike Product Saga: User not found");
      yield put(dislikeProductFailure("User not found"));
    }
  } catch (error) {
    console.log("Dislike Product Saga: Error", error);
    yield put(dislikeProductFailure(error));
  }
}

function* watchLikeProduct() {
  yield takeLatest(LIKE_PRODUCT_REQUEST, likeProduct);
}

function* watchDislikeProduct() {
  yield takeLatest(DISLIKE_PRODUCT_REQUEST, dislikeProduct);
}

export default function* productSaga() {
  yield all([watchLikeProduct(), watchDislikeProduct()]);
}