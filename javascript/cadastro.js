//VARIAVEIS
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

let confirme = document.querySelector('#confirme');
let labelConfirme = document.querySelector('#labelConfirme');



//VALIDAÇÃO NOME
nome.addEventListener('keyup', () => {

    if (nome.value.length <= 3) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = '*Insira um nome com no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
    } else {
        labelNome.setAttribute('style', 'color: black');
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: #dcdcdc')
    }

})


//VALIDAÇÃO EMAIL
email.addEventListener('keyup', () =>{
   
  
    if (email.value.length < 3) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = '*Insira um e-mail válido'
        email.setAttribute('style', 'border-color: red')
    } else {
        labelNome.setAttribute('style', 'color: black')
        labelNome.innerHTML = 'E-mail'
        email.setAttribute('style', 'border-color: #dcdcdc')
        
    }

})



//VALIDAÇÃO USUÁRIO
usuario.addEventListener('keyup', () => {

    if (usuario.value.length <= 5) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = '*Insira um usuário com no mínimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
    } else {
        labelUsuario.setAttribute('style', 'color: black')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: #dcdcdc')
    }

})



//VALIDAÇÃO SENHA
senha.addEventListener('keyup', () => {

    if (senha.value.length < 8) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = '*Insira uma senha com no mínimo 8 caracteres'
        senha.setAttribute('style', 'border-color: red')
    } else {
        labelSenha.setAttribute('style', 'color: black')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: #dcdcdc')
    }

})


//VALIDAÇÃO CONFIRMAÇÃO DE SENHA
 confirme.addEventListener('keyup', () => {

    if (confirme.value != senha.value) {
       
        labelConfirme.setAttribute('style', 'color: red');
        labelConfirme.innerHTML = '*Senha não confere'
        confirme.setAttribute('style', 'border-color: red')
    } else {
        labelConfirme.setAttribute('style', 'color: black')
        labelConfirme.innerHTML = 'Confirme sua senha'
        confirme.setAttribute('style', 'border-color: #dcdcdc')
    }

})


//FUNÇÃO DO ONCLICK
function validar() {

}