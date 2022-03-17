import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5Jbmmq6sIqvIqAUMqQxA7AYr0JzbXrAo",
  authDomain: "commercial-web-97ef3.firebaseapp.com",
  projectId: "commercial-web-97ef3",
  storageBucket: "commercial-web-97ef3.appspot.com",
  messagingSenderId: "376626155869",
  appId: "1:376626155869:web:5b21cbd635cc2d2cedd8b4",
  measurementId: "G-FT8S4VCECP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;
