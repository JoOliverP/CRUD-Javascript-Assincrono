/*CONEXÃO COM A API */
const listaClientes = () =>{
   return fetch(`http://localhost:3000/profile`) /*Faz um GET E retorna uma promise */
   .then(resposta =>{
       if (resposta.ok) {
           return resposta.json()
       }
       throw new Error('Não foi possivel listar os clientes')
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
        if (resposta.ok) {
           return resposta.body 
        }
        throw new Error('Não foi possivel criar um cliente')
    })
}
/*EVENTO DE EXCLUSAO */
const removeCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE',
    }).then(resposta =>{
        if (!resposta.ok) {
            throw new Error('Não foi possivel remover um cliente')
        }
    })
}

const detalhaClient = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`) 
   .then(resposta =>{
       if (resposta.ok) {
           return resposta.json()
       } 
       throw new Error('Não foi possivel detalhar o cliente')
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
        if (resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possivel atualizar um cliente')
        
    }) 
}

export const clienteService ={
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaClient,
    atualizaCliente
}
