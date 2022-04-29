let inputEmail = document.querySelector('[data-id="inputEmail"]');
let inputSenha = document.querySelector('[data-id="inputSenha"]'); 
let botaoSubmit = document.querySelector('[data-id="inputSubmit"]')
let mensagemErro = document.querySelector('[data-id="spanErro"]')


botaoSubmit.addEventListener('click', (event) =>{
    event.preventDefault()
    if(inputEmail.value === "admin@alurageek.com" && inputSenha.value === "alura123"){
        window.location.href = "administrador.html"
    } else {
        mensagemErro.textContent = 'Login inválido'
    }

})
