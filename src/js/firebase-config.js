// Inicializa o Firebase e re-exporta auth / db para uso em outras páginas

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApYs-arymFcCinsc6Qi4TVX2CO-gaNg2c",
  authDomain: "checksync-5e8b5.firebaseapp.com",
  projectId: "checksync-5e8b5",
  storageBucket: "checksync-5e8b5.firebasestorage.app",
  messagingSenderId: "294235358791",
  appId: "1:294235358791:web:19bedfa9f9478044f01362",
  measurementId: "G-JHH295YXZS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporte o que for necessário nas páginas
export { app, auth, db, signInWithEmailAndPassword, signOut, onAuthStateChanged };