let botaoTopo = document.querySelector('[data-id="botaoTopo"]');

botaoTopo.addEventListener('mouseover', ()=>{
    botaoTopo.classList.add('voltar-topo__botao--ativo');
})

document.addEventListener('click', () =>{
    botaoTopo.classList.remove('voltar-topo__botao--ativo')
})