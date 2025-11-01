// Importa as funções necessárias do SDK do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyApYs-arymFcCinsc6Qi4TVX2CO-gaNg2c",
  authDomain: "checksync-5e8b5.firebaseapp.com",
  projectId: "checksync-5e8b5",
  storageBucket: "checksync-5e8b5.firebasestorage.app",
  messagingSenderId: "294235358791",
  appId: "1:294235358791:web:19bedfa9f9478044f01362",
  measurementId: "G-JHH295YXZS"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços
export const auth = getAuth(app);

// re-exporta funções auth para usar em outros módulos sem importar do CDN direto
export { signInWithEmailAndPassword, signOut, onAuthStateChanged };