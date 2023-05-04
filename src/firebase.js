// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDM_19WwTkI3FxFcyIIiJgnW3ZkJCRi_aI",
  authDomain: "chatapp-5984d.firebaseapp.com",
  projectId: "chatapp-5984d",
  storageBucket: "chatapp-5984d.appspot.com",
  messagingSenderId: "81749210470",
  appId: "1:81749210470:web:062bc30f3ef13682f5c4a7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
