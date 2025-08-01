import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7aN952ju_pRHMeyjnjGZbmZ3G-U9afp0",
  authDomain: "digi-media-komunika.firebaseapp.com",
  projectId: "digi-media-komunika",
  storageBucket: "digi-media-komunika.appspot.com",
  messagingSenderId: "33715556278",
  appId: "1:33715556278:web:8c17fcc6f0fb09eb983b17"
};

// Initialize Firebase for server-side
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };
