// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwv2ADfdlRhkPPgsaWusFOl1tZd8-mOG0",
  authDomain: "clone-f6b27.firebaseapp.com",
  projectId: "clone-f6b27",
  storageBucket: "clone-f6b27.appspot.com",
  messagingSenderId: "657393064063",
  appId: "1:657393064063:web:581f3760fb0ba8f71ec74a",
  measurementId: "G-WNDXSEG81H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
