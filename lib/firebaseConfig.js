import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDL6_L7ybn0iwmHdshe1WXyOYGVqnDZ9xM",
  authDomain: "coursi-academy.firebaseapp.com",
  projectId: "coursi-academy",
  storageBucket: "coursi-academy.firebasestorage.app",
  messagingSenderId: "320095355985",
  appId: "1:320095355985:web:b3df3fb8ce036ce0a72470",
  measurementId: "G-G1DCNFLR46"
};

function initializeFirebase() {
  try {
    if (!getApps().length) {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const db = getFirestore(app);
      
      if (typeof window !== "undefined") {
        getAnalytics(app);
      }
      
      // console.log("Firebase initialized successfully");

      return { app, auth, db };
    } else {
      const app = getApp();
      const auth = getAuth(app);
      auth.languageCode = 'it';
      const db = getFirestore(app);

      // console.log(auth)
      
      // console.log("Firebase app already initialized");
      return { app, auth, db };
    }
  } catch (error) {
    console.error("Firebase initialization error:", error);
    return null;
  }
}


export const { auth, db } = initializeFirebase() || {};


