import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyByQ5O05UN8l0bwu2QwS0V1ind2ZCbh6V4",
  authDomain: "mkg-digital-learning.firebaseapp.com",
  projectId: "mkg-digital-learning",
  storageBucket: "mkg-digital-learning.firebasestorage.app",
  messagingSenderId: "1084828404391",
  appId: "1:1084828404391:web:9e0b2a8c2e5c1f6c3c3c3c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
