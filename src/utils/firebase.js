// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsHlLNfO01T9jjP6IMsZ_dEwkNhbKc_gk",
  authDomain: "netflex-gpt-9af43.firebaseapp.com",
  projectId: "netflex-gpt-9af43",
  storageBucket: "netflex-gpt-9af43.firebasestorage.app",
  messagingSenderId: "549779662842",
  appId: "1:549779662842:web:fb1ffc64fdc438b030e643",
  measurementId: "G-JDBM6VGY2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();