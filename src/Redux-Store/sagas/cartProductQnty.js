import { takeLatest, call, put } from "redux-saga/effects";
import { doc, getDoc } from "firebase/firestore";
import { FETCH_PRODUCT_QUANTITY_REQUEST } from "../constants/constants";
import { db } from "../../config/firebase";
import { fetchProductQuantitySuccess,fetchProductQuantityFailure } from "../Actions/cartProductQnty";


function* fetchProductQuantity(action) {
    console.log("a")
  try {
    console.log("b");
    const { userId, productId } = action.payload;

    const userDocRef = doc(db, "users", userId);
    const userDocSnapshot = yield getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
        console.log("c");
      const userData = userDocSnapshot.data();
      const cart = userData.cart || [];

      const product = cart.find((item) => item.productId === productId);

      if (product) {
        console.log("d");
        const quantity = product.quantity;
        yield put(fetchProductQuantitySuccess(quantity));
      } else {
        console.log("e");
        yield put(fetchProductQuantitySuccess(0)); // Product not found, set quantity as 0
      }
    } else {
        console.log("f");
      yield put(fetchProductQuantityFailure("User document not found."));
    }
  } catch (error) {
    console.log("g");
    yield put(fetchProductQuantityFailure(error.message));
  }
}

function* watchFetchProductQuantity() {
  yield takeLatest(FETCH_PRODUCT_QUANTITY_REQUEST, fetchProductQuantity);
}

export default watchFetchProductQuantity;