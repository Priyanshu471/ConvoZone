// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyCAnQBQvB8XSv2w98f8chf2GLQEY_S7p1E",
//   authDomain: "convozon.firebaseapp.com",
//   projectId: "convozon",
//   storageBucket: "convozon.appspot.com",
//   messagingSenderId: "800625269972",
//   appId: "1:800625269972:web:494553c6c12de147b8af41"
// };
const firebaseConfig = {
  apiKey: "AIzaSyB5Kkw8b8sA8RZHPe3fsbOVZRGxN3FNiKs",
  authDomain: "chatapp-c3416.firebaseapp.com",
  projectId: "chatapp-c3416",
  storageBucket: "chatapp-c3416.appspot.com",
  messagingSenderId: "999981076255",
  appId: "1:999981076255:web:2d452ef8e73b12f5d8ea2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
