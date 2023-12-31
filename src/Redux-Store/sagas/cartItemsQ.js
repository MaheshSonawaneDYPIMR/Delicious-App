import { takeLatest, call, put } from "redux-saga/effects";
import { doc, getDoc } from "firebase/firestore";
import { FETCH_TOTAL_PRODUCT_QUANTITY_REQUEST } from "../constants/constants";
import { db } from "../../config/firebase";
import { fetchTotalProductQuantityFailure,fetchTotalProductQuantitySuccess } from "../Actions/cartItemsQ";
import { fetchFullCartDataSuccess } from "../Actions/cartItemsQ";

function* fetchTotalProductQuantity(action) {
    console.log("cart_qnty_A")
  try {
    console.log("B");
    const { userId } = action.payload;
    const userDocRef = doc(db, "users", userId);
    const userDocSnapshot = yield getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
         console.log("C");
      const userData = userDocSnapshot.data();
      const cart = userData.cart || [];
      console.log(cart)
      const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
      console.log(totalQuantity)
      yield put(fetchTotalProductQuantitySuccess(totalQuantity));
      yield put(fetchFullCartDataSuccess(cart)); // Create this action for full cart data

    } else {
         console.log("D");
      yield put(fetchTotalProductQuantityFailure("User document not found."));
    }
  } catch (error) {
     console.log("E",error);
    yield put(fetchTotalProductQuantityFailure(error.message));
  }
}

function* watchFetchTotalProductQuantity() {
  yield takeLatest(
    FETCH_TOTAL_PRODUCT_QUANTITY_REQUEST,
    fetchTotalProductQuantity
  );
}

export default watchFetchTotalProductQuantity;