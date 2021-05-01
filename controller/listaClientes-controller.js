import {clienteService} from '../service/cliente-service.js'


/*CRIAÇÃO DE UM TEMPLATE  PARA VIZUALIZAÇÃO DOS DADOS*/
const criaNovaLinha = (nome,email,id) =>{
    const linhaNovoCliente = document.createElement('tr')

    const conteudo =`
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td> 
    `
    linhaNovoCliente.innerHTML = conteudo

    linhaNovoCliente.dataset.id = id    /*cria data atributs */

    return linhaNovoCliente
}

/* Verifica o dom para buscar a tabela*/
const tabela = document.querySelector('[data-tabela')

tabela.addEventListener('click', async (evento)=>{
    let ehbotaoDeleta = evento.target.className === 'botao-simples botao-simples--excluir'

    if (ehbotaoDeleta) {
        try {
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        } catch (erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
        
    }
})


/*CHAMA A FUNÇÃO DA API PARA VIZUALIZAÇÃO */
const render = async ()=>{
    try{
        const listaClientes = await clienteService.listaClientes()

        listaClientes.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome,element.email,element.id))
        });   
    }catch (erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()
