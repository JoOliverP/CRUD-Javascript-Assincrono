/*CONEXÃO COM A API */
const listaClientes = () =>{
   return fetch(`http://localhost:3000/profile`) /*Faz um GET E retorna uma promise */
   .then(resposta =>{
       return resposta.json()
   })  
}


/*EVENTO DE CRIAÇÃO */
const criaCliente = (nome, email)=>{
    return fetch(`http://localhost:3000/profile`,{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }) 
    .then(resposta =>{
        return resposta.body
    })
}
/*EVENTO DE EXCLUSAO */
const removeCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE',
    })
}

const detalhaClient = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`) 
   .then(resposta =>{
       return resposta.json()
   })  
}

const atualizaCliente = (id,nome,email)=>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome : nome,
            email : email
        })
    })
    .then( resposta =>{
        return resposta.json()
    }) 
}

export const clienteService ={
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaClient,
    atualizaCliente
}
