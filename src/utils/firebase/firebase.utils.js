import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInwithEmailAndPassword,
  signOut as signOutFirebaseUser,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const signInMethods = {
  popup: signInWithPopup,
  redirect: signInWithRedirect,
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeKTosA7eNzoQJutj-nth7B6KGYG7ue44",
  authDomain: "e-clothing-3ad80.firebaseapp.com",
  projectId: "e-clothing-3ad80",
  storageBucket: "e-clothing-3ad80.appspot.com",
  messagingSenderId: "253644980129",
  appId: "1:253644980129:web:2a9c920ced40b1115115e0",
};

// Firebase App
//const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

// Google Auth provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
/**
 * @param {'redirect' | 'popup'} method The method to google sign in popup or redirect
 */
export const signInWithGoogle = (method) =>
  signInMethods[method](auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating the user, ", error.message);
    }
  }
  return userDocRef;
};

/**
 * @param {string} email user email to sign up
 * @param {string} password user password to sign up
 */
export const createAuthUserFromEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

/**
 * @param {string} email user email to sign in
 * @param {string} password user password to sign in
 */
export const signInWithEmailAndPassword = async (email, password) =>
  await firebaseSignInwithEmailAndPassword(auth, email, password);

export const signOut = () => signOutFirebaseUser(auth);

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
