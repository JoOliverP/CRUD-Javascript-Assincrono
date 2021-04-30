/*CONEXÃO COM A API */
const listaClientes = () =>{
   return fetch(`http://localhost:3000/profile`) /*Faz um GET E retorna uma promise */
   .then(resposta =>{
       return resposta.json()
   })  
}

export const clienteService ={
    listaClientes 
    
}
