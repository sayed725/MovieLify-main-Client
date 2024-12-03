// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmy9OfoiLXMz37OniSDAMt1OHxQOQw5ro",
  authDomain: "assignment-10-b0e3a.firebaseapp.com",
  projectId: "assignment-10-b0e3a",
  storageBucket: "assignment-10-b0e3a.firebasestorage.app",
  messagingSenderId: "187238743567",
  appId: "1:187238743567:web:d904cc941312e859546d7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);