// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1y6y7_K2AkGhmqbB87umZHHPsiCWhVkw",
  authDomain: "ecomerce-4689a.firebaseapp.com",
  projectId: "ecomerce-4689a",
  storageBucket: "ecomerce-4689a.appspot.com",
  messagingSenderId: "1037195485750",
  appId: "1:1037195485750:web:d41f398001e0c12ce92e97",
  measurementId: "G-B09W6H56XR"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const analytics = getAnalytics(FIREBASE_APP);
export  const db = getFirestore(FIREBASE_APP);