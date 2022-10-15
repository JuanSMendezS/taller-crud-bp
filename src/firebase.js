// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsdSJTMJ2IHBsMwTPWFLGtqDBpSTPCg4",
  authDomain: "tallerbuenaspracticas-fec97.firebaseapp.com",
  projectId: "tallerbuenaspracticas-fec97",
  storageBucket: "tallerbuenaspracticas-fec97.appspot.com",
  messagingSenderId: "781184323292",
  appId: "1:781184323292:web:a8aa4079f74a22e36cae19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}