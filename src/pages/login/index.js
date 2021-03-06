import { signIn, loginWithGoogle } from './data.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('class', 'box');
  rootElement.innerHTML = `
  <div class='box-item'>
  <h1><img src='./img/logo.png' alt='Logotype' class='logos-home'></h1>
  <img src='../../img/pessoas.png' alt='Logotype' class='logos-home'>
</div>
<div class='box-item'>
  <h3>BEM VINDO (A)</h3>
  <form method='post'>
    <input required="" autocomplete="off" type='email' placeholder='Email' id='emailArea' class='login-area'>
    <input required="" autocomplete="off" type='password' placeholder='Senha' id='passwordArea' class='login-area'>
  </form>
  <button class='button-area btn signIn' id='start'>Entrar</button>
  <p class="or-area">━━━━━━━━━ OU ━━━━━━━━━</p>
  <button class='button-area btn btnGoogle'><img src='./img/google-icon.png' alt='Google' class='google-icon'> Entrar
    com o Google</button>
  <p class='font-small'>Se não tem um conta, <a href='/#signup' style="color:black;font-weight: 600"
      id='sign-up-login'>REGISTRE-SE.</a>
  </p>
</div>  
  `;

  const email = rootElement.querySelector('#emailArea');
  const password = rootElement.querySelector('#passwordArea');

  const signInButton = rootElement.querySelector('#start');
  signInButton.addEventListener('click', (event) => {
    signIn(email.value, password.value);
    event.preventDefault();
  });

  const googleBtn = rootElement.querySelector('.btnGoogle');
  googleBtn.addEventListener('click', () => {
    loginWithGoogle();
  });

  const linkSignUp = rootElement.querySelector('#sign-up-login');
  linkSignUp.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/signup');
  });

  return rootElement;
};
