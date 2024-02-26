// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw5tkhuARpmi3njZayHVANjYMhOJjRZMs",
  authDomain: "vid-gen-msofhp.firebaseapp.com",
  projectId: "vid-gen-msofhp",
  storageBucket: "vid-gen-msofhp.appspot.com",
  messagingSenderId: "1088688536534",
  appId: "1:1088688536534:web:75ad77610ff4bbc1b3c277",
  measurementId: "G-9L1JT6ZE8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
