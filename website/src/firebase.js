import { initializeApp } from "firebase/app";

import "firebase/analytics";

import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo4MzzaFoYydUBEXW-o8AsmepJBzUfhiw",
  authDomain: "first-web-with-firebase.firebaseapp.com",
  projectId: "first-web-with-firebase",
  storageBucket: "first-web-with-firebase.appspot.com",
  messagingSenderId: "4286221992",
  appId: "1:4286221992:web:dc1dbb1bd538c76cfffc9d",
  measurementId: "G-2EV0DLQW0J",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firebase

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const storage = getStorage(app);