// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCVG9HVN9W3eq_ZQFq378mkkR-xB4i5FU",
  authDomain: "emma-john-caf01.firebaseapp.com",
  projectId: "emma-john-caf01",
  storageBucket: "emma-john-caf01.appspot.com",
  messagingSenderId: "407879178043",
  appId: "1:407879178043:web:f91663dd9f0518c312091e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;