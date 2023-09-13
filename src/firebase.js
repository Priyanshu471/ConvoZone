// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCAnQBQvB8XSv2w98f8chf2GLQEY_S7p1E",
  authDomain: "convozon.firebaseapp.com",
  projectId: "convozon",
  storageBucket: "convozon.appspot.com",
  messagingSenderId: "800625269972",
  appId: "1:800625269972:web:494553c6c12de147b8af41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
