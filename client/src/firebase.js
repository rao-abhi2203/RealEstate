// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-a0e6b.firebaseapp.com",
  projectId: "real-estate-a0e6b",
  storageBucket: "real-estate-a0e6b.appspot.com",
  messagingSenderId: "394448621196",
  appId: "1:394448621196:web:a806e76b024f64f0e0f5a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);