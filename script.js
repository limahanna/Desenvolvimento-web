const formLogin = document.getElementById('form-login');
const inputEmail=document.getElementById('email');
const inputSenha=document.getElementById('senha');
const btnLogin=document.getElementById('btn-login');

inputEmail.addEventListener('input',() => {
  if(inputEmail.checkvalidity() && inputEmail.value.trim() !==''){
    inputEmail.classList.add('campo-valido');
  } else {
       inputSenha.classList.remove('campo-valido');
  }
});

inputSenha.addEventListener('input',() => {
   if(inputSenha.value.length >= 8){
    inputSenha.classList.add('campo-valido');
   } else { 
    inputSenha.classList.remove('campo-valido');
   }
});

