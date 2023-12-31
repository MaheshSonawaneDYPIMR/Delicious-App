import { takeEvery, put, call } from "redux-saga/effects";
import firebase from "../../config/firebase.js"; 
import { LOGIN_REQUEST } from "../constants/constants.js";
import { loginSuccess, loginFailure } from "../Actions/Auth.js";
import {  takeLatest } from "redux-saga/effects";
import { auth, db } from "../../config/firebase.js";
import { registerSuccess, registerFailure } from "../Actions/Auth.js";
import { REGISTER_REQUEST } from "../constants/constants.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

function* loginSaga(action) {
  try {
    console.log("I AM HERE L_SAGA_T");
    const { email, password } = action.payload;

    // Use directly initialized Firebase auth instance from your config
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth, // Pass the auth instance directly
      email,
      password
    );
    console.log(userCredential.user.uid)
    yield put(loginSuccess(userCredential.user.uid));
  } catch (error) {
    console.log("I AM HERE L_SAGA_C", error);
    yield put(loginFailure(error.message));
  }
}


 function* registerSaga(action) {

   try {
     const { name, email, phone, password } = action.payload;
      console.log("I AM HERE R_SAGA_T")
     // Using 'call' to invoke the asynchronous function separately
     const userCredential = yield call(
       createUserWithEmailAndPassword,
       auth,
       email,
       password
     );

     // Accessing the user from the resolved promise of 'createUserWithEmailAndPassword'
     const user = userCredential.user;
     const myUserUid = auth.currentUser.uid;

     // Setting user data in Firestore
     yield call(setDoc, doc(db, "users", `${myUserUid}`), {
       id:myUserUid,
       name: name,
       email: email,
       phone: phone,
       password: password,
     });

     yield put(registerSuccess(auth.currentUser.uid));
     
   } catch (error) {
    console.log("I AM HERE R_SAGA_C");
     yield put(registerFailure(error.message));
   }
 }

// Watchers
export function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}

export function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
