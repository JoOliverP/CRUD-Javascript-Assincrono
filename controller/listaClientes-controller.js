import {clienteService} from '../service/cliente-service.js'
/*CRIAÇÃO DE UM TEMPLATE  PARA VIZUALIZAÇÃO DOS DADOS*/
const criaNovaLinha = (nome,email) =>{
    const linhaNovoCliente = document.createElement('tr')

    const conteudo =`
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id="" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td> 
    `
    linhaNovoCliente.innerHTML = conteudo

    return linhaNovoCliente

}
/* Verifica o dom para buscar a tabela*/
const tabela = document.querySelector('[data-tabela')

/*CHAMA A FUNÇÃO DA API PARA VIZUALIZAÇÃO */
clienteService.listaClientes()
.then(data =>{
            data.forEach(element => {
            tabela.appendChild(criaNovaLinha(element.nome,element.email))
            });
})