import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD60E0bLHYOCL5kxf2QlOUOs3a9jx6LvZ4",
  authDomain: "rapidchat-93c37.firebaseapp.com",
  projectId: "rapidchat-93c37",
  storageBucket: "rapidchat-93c37.appspot.com",
  messagingSenderId: "957549688124",
  appId: "1:957549688124:web:1c6fcb03ca9f7526789a39"
 // your config goes here
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
