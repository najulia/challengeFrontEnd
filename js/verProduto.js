let botaoVerMais = document.querySelectorAll('.card__info--link');

botaoVerMais.forEach((botao) =>{
    botao.addEventListener('click', () =>{
        window.open('produto.html', '_blank')
    })
})
