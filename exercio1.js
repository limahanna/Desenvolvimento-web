// Nível 1: Dom e Eventos Básicos
// complete as 3 lacunas para fazer o botão "Limpa" funcionar:
const btnLimpar = document.getElementById('btn-limpar');
const formCadastro = document.getElementById('form-cadastro');

btnLimpar.addEventListener('click', () =>{
    formCadastro.reset ();
});



// Nível 2: Validação do email:
const inputEmail = document.getElementById('email');

inputEmail.addEventListener('input', () =>{
    const valor = inputEmail.value;


if (valor.endsWith('@ifpa.edu.br')) {
    inputEmail.classLista.add('campo-valido');
} else {
    inputEmail.classList.remove('campo-valido');
}

});


// Nível 3: localStorage (Salvar e ler o usuáro autenticado)
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');

const novoUsuário = {
    nome: inputNome.value,
    nome: inputEmail.value,
};

// Salva o objeto convertido em texto
localStorage.setItem('usuário',
    JSON.        JSON.stringify(novoUsuário));

//Busca o texto salvo no navegador
    const dadosSalvos = localStorage.getItem('usuarioCadastrado');

    if (dadosSalvos){
        // converte de volta para objeto
        const usuário = JSON.parse(dadosSalvos);
        document.getElementById,('nome-usuário').textContent = usuário.nome;
    }


