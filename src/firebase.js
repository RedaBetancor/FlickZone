
//Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkluiYXZum12LUqztK8YH4qkWOTcUQRwc",
  authDomain: "flickzone-7cc58.firebaseapp.com",
  projectId: "flickzone-7cc58",
  storageBucket: "flickzone-7cc58.appspot.com",
  messagingSenderId: "707851050133",
  appId: "1:707851050133:web:658df7b3a540ad5bc2cf9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
