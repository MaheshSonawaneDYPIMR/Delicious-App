// userSaga.js

import { takeLatest, call, put } from "redux-saga/effects";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { GET_USER_REQUEST } from "../constants/constants.js";
import { getUserSuccess, getUserFailure } from "../Actions/getUser.js";

function* getUser(action) {
  try {
    console.log("I AM HERE GU_SAGA_T")
    const { userId } = action.payload;
    const userRef = doc(db, "users", userId); // Assuming 'users' is your collection name

    const userSnapshot = yield call(getDoc, userRef);
    if (userSnapshot.exists()) {
      console.log("I AM HERE GU_SAGA_c 'user Found'");
      const userData = userSnapshot.data();
      console.log("REAL_USER_DATA",userData)
      yield put(getUserSuccess(userData));
    } else {
      console.log("I AM HERE GU_SAGA_c 'user not Found'");
      yield put(getUserFailure("User not found"));
    }
  } catch (error) {
    console.log("I AM HERE GU_SAGA_c");
    yield put(getUserFailure(error.message));
  }
}

export function* watchGetUser() {
  yield takeLatest(GET_USER_REQUEST, getUser);
}
