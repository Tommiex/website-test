import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyBo4MzzaFoYydUBEXW-o8AsmepJBzUfhiw",
  authDomain: "first-web-with-firebase.firebaseapp.com",
  projectId: "first-web-with-firebase",
  storageBucket: "first-web-with-firebase.appspot.com",
  messagingSenderId: "4286221992",
  appId: "1:4286221992:web:dc1dbb1bd538c76cfffc9d",
  measurementId: "G-2EV0DLQW0J",
};
console.log("run");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getText(db) {
  const textsCol = collection(db, "test");
  const textSnapshot = await getDocs(textsCol);
  const textList = textSnapshot.docs.map((doc) => doc.data());
  return textList;
}
export const text = await getText(db)
console.log(text)
