import { takeLatest, call, put } from "redux-saga/effects";
import firebase from "../../config/firebase.js";
import { FETCH_PRODUCTS_REQUEST } from "../constants/constants";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../Actions/getProducts";
import { db } from "../../config/firebase.js";
import { collection, getDocs } from "firebase/firestore"; 

export function* getProductsFromFirebaseSaga() {
  try {
    console.log("I_AM_HERE_FP_T");
    const productsCollection = collection(db, "products"); // Reference to 'products' collection
    const querySnapshot = yield call(getDocs, productsCollection); // Fetch data from the collection

    const products = []; // Array to store products

    querySnapshot.forEach((doc) => {
      products.push({ uId: doc.id, ...doc.data() });
      //console.log("ids",products.id) // Extract each document's data and store it
    });

   
    yield put(fetchProductsSuccess(products)); // Dispatch success action with fetched products
  } catch (error) {
    console.log("I_AM_HERE_FP_C",error);
    yield put(fetchProductsFailure(error)); // Dispatch failure action if there's an error
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, getProductsFromFirebaseSaga);
}
