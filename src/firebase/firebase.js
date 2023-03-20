import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2-3D7V11bGKYNyuSRtX1hJ9VxvBp6RKk",
  authDomain: "proyecto-react-js-374ab.firebaseapp.com",
  projectId: "proyecto-react-js-374ab",
  storageBucket: "proyecto-react-js-374ab.appspot.com",
  messagingSenderId: "237657836974",
  appId: "1:237657836974:web:f3748fa334b2db70a38c3f"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);