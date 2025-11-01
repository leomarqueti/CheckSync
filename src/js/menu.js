import { auth } from './firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';
import { logoutUser } from './auth.js';

// Se não estiver logado, volta pra login.html
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = 'login.html';
  }
});

// Se houver botão de logout, conecta o evento
document.getElementById('logoutButton')?.addEventListener('click', async () => {
  await logoutUser();
});