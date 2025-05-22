// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt4Y1qv1aMZEW5XE6ynN_K61xFgRrLNU0",
  authDomain: "netfilxgpt-e178b.firebaseapp.com",
  projectId: "netfilxgpt-e178b",
  storageBucket: "netfilxgpt-e178b.firebasestorage.app",
  messagingSenderId: "142141492193",
  appId: "1:142141492193:web:033940f60d492c222960a0",
  measurementId: "G-J9WSNPB1L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
