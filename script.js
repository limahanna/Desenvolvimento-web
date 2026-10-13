const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const inputConfirma = document.getElementById('confirmar-senha');

const reqTamanho = document.getElementById('req-tamanho');
const reqMaiuscula = document.getElementById('req-maiuscula');
const reqNumero = document.getElementById('req-numero');
const reqEspecial =  document.getElementById('req-especial');

inputSenha.addEventListener('input', () => {
    const valor = inputSenha.value;

    const temtamanho = valor.length >= 8;
    atualizarRequisito(reqTamanho, temtamanho);

    const temMaiuscula = /[A-Z]/.test(valor);
    atualizarRequisito(reqMaiuscula, temMaiuscula);

    const temNumero = /[0-9]/.test(valor);
    atualizarRequisito(reqNumero, temNumero); 

    const temEspecial = /[!@#$%^&*(),.?":{}| <>]/.test(valor);
    atualizarRequisito(reqEspecial, temEspecial);

    if (temtamanho && temMaiuscula && temNumero && temEspecial){
        inputSenha.classList.add('campo-valido');
    }else{
        inputSenha.classList.remove('campo-valido');
    }
});

function atualizarRequisito(elemento, condicao){
    if (condicao){
            elemento.classList.add('valido');
    } else {
        elemento.classList.remove('valido');
    }
}

