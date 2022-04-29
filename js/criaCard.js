const botaoAddProduto = document.querySelector('.todos-produtos__botao')

botaoAddProduto.addEventListener('click', () => {
    window.open('administrador.html', '_blank')
})

const pegaProdutos = async () =>{
    const url = 'http://localhost:3000/products'
    const data = await fetch(url)
    const products = await data.json()  
    return products
}
    const criaCard = async(id) =>{
    const div = document.querySelector('.produtos-admin')
    const products = await pegaProdutos()

    products.forEach(product => {
        const card = document.createElement('article')
        card.classList.add('card')

        card.innerHTML = `<div class="card__acoes">
        <img src="assets/acoes 1.svg" alt="" class="card__acoes--icone">
        <img src="assets/acoes 2.svg " alt="" class="card__acoes--icone">
    </div>
    <img src="${product.image}" alt="Imagem produto XYZ" class="card__imagem">
    <p class="card__info card__info--nome">${product.title}</p>
    <p class="card__info card__info--preco">${product.price}</p>
    <p class="card__info card__info--codigo">${product.description}</p>`

    card.dataset.id = product.id

    div.appendChild(card);

    })
}
pegaProdutos();
criaCard();




