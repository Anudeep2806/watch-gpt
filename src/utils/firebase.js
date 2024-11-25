// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxi1tf1MNWIHZ7FYa9HCj1JOgJWD84qeM",
  authDomain: "watchgpt-63cff.firebaseapp.com",
  projectId: "watchgpt-63cff",
  storageBucket: "watchgpt-63cff.firebasestorage.app",
  messagingSenderId: "1066153003415",
  appId: "1:1066153003415:web:bf68c6975d02338d071cd2",
  measurementId: "G-MN60HK3N4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
