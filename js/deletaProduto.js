export const deletaProduto = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`,{
        method: 'DELETE',  
    })

    .then(response => {
        if(!response.ok){
            throw new Error ('Não foi possível remover o produto')
        }
    })
}


