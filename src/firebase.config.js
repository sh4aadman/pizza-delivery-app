// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa85HZUSS6RzA4N6iy8DAMptMtOF5Pg6Y",
  authDomain: "pizza-delivery-web.firebaseapp.com",
  projectId: "pizza-delivery-web",
  storageBucket: "pizza-delivery-web.firebasestorage.app",
  messagingSenderId: "513304493969",
  appId: "1:513304493969:web:1f61c50e554accb76de430",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;