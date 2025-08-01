import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRRvOXpnHTnDtXbnhnO4DLnU0bWN472_8",
  authDomain: "digi-media-komunika.firebaseapp.com",
  projectId: "digi-media-komunika",
  storageBucket: "digi-media-komunika.appspot.com",
  messagingSenderId: "33715556278",
  appId: "1:33715556278:web:8c17fcc6f0fb09eb983b17",
};

// Initialize Firebase for client-side
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth, app };
