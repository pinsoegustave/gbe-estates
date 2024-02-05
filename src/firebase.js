// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-gbe-estate.firebaseapp.com",
  projectId: "mern-gbe-estate",
  storageBucket: "mern-gbe-estate.appspot.com",
  messagingSenderId: "278422758657",
  appId: "1:278422758657:web:da0a789a892c1868f4e700"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);