// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO-Gse4Uo5cBt6LLKREdZ3ObBHhmlc_uE",
  authDomain: "newone-13a20.firebaseapp.com",
  projectId: "newone-13a20",
  storageBucket: "newone-13a20.appspot.com",
  messagingSenderId: "669512847064",
  appId: "1:669512847064:web:e160c68332d6fc18bb91ad",
  measurementId: "G-LJ1JSP686F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const nemail = new createUserWithEmailAndPassword();
export const db = getFirestore(app);