import {
  auth,
  signInWithEmailAndPassword,
  signOut
} from './firebase-config.js';

// Faz login e redireciona para menu.html (login.html e menu.html estão em src/pages/)
export async function loginUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // redireciona para menu na mesma pasta pages
    window.location.href = 'menu.html';
  } catch (err) {
    // trata erro (ex: mostrar mensagem)
    throw err;
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    window.location.href = 'login.html';
  } catch (err) {
    console.error('Logout erro', err);
  }
}

// listener do formulário (se estiver carregando este arquivo na login.html)
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('inputLogin').value;
  const password = document.getElementById('inputSenha').value;
  try {
    await loginUser(email, password);
  } catch (err) {
    alert(err.message || 'Erro ao autenticar');
  }
});