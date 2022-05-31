// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzhD-Yl4WLIW37uKU3ke0poP4Qg9Qt2n4",
  authDomain: "task-51d86.firebaseapp.com",
  projectId: "task-51d86",
  storageBucket: "task-51d86.appspot.com",
  messagingSenderId: "314569544163",
  appId: "1:314569544163:web:7c8a5b2f9818d43fe510d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
