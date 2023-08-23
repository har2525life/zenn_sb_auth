// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY!,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN!,
  projectId: import.meta.env.VITE_APP_PROJECT_ID!,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET!,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDERID!,
  appId: import.meta.env.VITE_APP_APP_ID!,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
