// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgG19TLAvq_5P4fp177R9-f_WBd2Zg1n8",
  authDomain: "raven-gim.firebaseapp.com",
  projectId: "raven-gim",
  storageBucket: "raven-gim.appspot.com",
  messagingSenderId: "464918617439",
  appId: "1:464918617439:web:945db663840acded486aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { auth, db }