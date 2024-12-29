// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy-l9_jEzJvRszbbeecDAcHYaXy0Oe4RQ",
  authDomain: "deliveryapp-889b2.firebaseapp.com",
  projectId: "deliveryapp-889b2",
  storageBucket: "deliveryapp-889b2.firebasestorage.app",
  messagingSenderId: "344182551628",
  appId: "1:344182551628:web:0c1317e4adc95d4a8ab0e9",
  measurementId: "G-Q4H4N498Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);