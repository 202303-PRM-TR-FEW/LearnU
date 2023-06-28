// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnWb68uHTBTfpGkRmqFn3nVGALaH_ZZvE",
  authDomain: "learnu-database.firebaseapp.com",
  projectId: "learnu-database",
  storageBucket: "learnu-database.appspot.com",
  messagingSenderId: "244643697368",
  appId: "1:244643697368:web:624cd59ecd9b476bdfbdad",
  measurementId: "G-PHYDNX3SXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);