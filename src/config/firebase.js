import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxml0Tew7OxuZkN7Qj-lONbmod1C8Kij8",
  authDomain: "delicious-919ef.firebaseapp.com",
  projectId: "delicious-919ef",
  storageBucket: "delicious-919ef.appspot.com",
  messagingSenderId: "251945856856",
  appId: "1:251945856856:web:a0ab6d74059d1b84843f2d",
  measurementId: "G-FRMDXJH8E0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
