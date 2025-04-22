// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkeTA1Pv2OeFU0FFKEgLsZFLM2SoGW9f8",
  authDomain: "tomjerry-1124.firebaseapp.com",
  projectId: "tomjerry-1124",
  storageBucket: "tomjerry-1124.appspot.com",
  messagingSenderId: "772534483258",
  appId: "1:772534483258:web:82252e66ce0bf03a2fb803",
  measurementId: "G-V5DFW6BV48"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
