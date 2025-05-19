// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCroOxQZi-0JH1WPs_x42WNNxf4WjOXSIw",
  authDomain: "coffee-shop-app-d0d41.firebaseapp.com",
  projectId: "coffee-shop-app-d0d41",
  storageBucket: "coffee-shop-app-d0d41.firebasestorage.app",
  messagingSenderId: "1031336024987",
  appId: "1:1031336024987:web:21451a16a1d7ba76de9f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;