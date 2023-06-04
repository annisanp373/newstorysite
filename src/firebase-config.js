// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider }from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd7Jw4zOyr4lDzGRuyBxoUHxO2iyHqU00",
  authDomain: "storywebsite.firebaseapp.com",
  projectId: "storywebsite",
  storageBucket: "storywebsite.appspot.com",
  messagingSenderId: "1076660655059",
  appId: "1:1076660655059:web:26214082f25735e67f5526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();