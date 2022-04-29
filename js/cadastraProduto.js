const pegaInfos = () =>{
    const inputImagem = document.querySelector('#input-image')
    const inputNome = document.querySelector('#input-nome')
    const inputPreco = document.querySelector('#input-preco')
    const inputDescricao = document.querySelector('#input-descricao')
    const botaoAdd = document.querySelector('.adicionar-produto__botao');

    botaoAdd.addEventListener('click', (event) =>{
        event.preventDefault();
        
        fetch('http://localhost:3000/products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: `${inputImagem.value}`,
                title: `${inputNome.value}`,
                price: `${inputPreco.value}`,
                description: `${inputDescricao.value}`
            })
        })
        console.log('Enviando');
    })
}

pegaInfos();