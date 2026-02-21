// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginshopiq.firebaseapp.com",
  projectId: "loginshopiq",
  storageBucket: "loginshopiq.firebasestorage.app",
  messagingSenderId: "218990018085",
  appId: "1:218990018085:web:eeeb49e91e9a61edecc9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}