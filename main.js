var dadosLista = [];

//cria função para validar preenchimento de campos da tela de login
function acessar()
{
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    //estrutura que verifica se os campos foram preenchidos
    if (!loginEmail || !loginSenha)
    {
        alert("Por favor, preencha todos os campos!");
    }
    else
    {
        window.location.href = 'cadastro.html';
    }
}

//Função para salvar usuário
function salvarUser()
{
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser)
    {
        dadosLista.push(nomeUser); //pega a informação que está na variável e guarda dentro do array, dados lista;
        console.log(dadosLista); //mostra no console o array;
        criarLista();
        document.getElementById('nomeUser').value = "";
    }
    else
    {
        alert("Usuário, favor preencher o campo nome");
    }
}

function criarLista()
{
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length - 1); i ++)
    {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td> <button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
//parentNode - Node pai, daquele elemento, parentNode(acessa = nível1), parentNode (novamente)(acessa = nivel2);

//função para editar nomes da lista
function editar(i)
{
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];  //pega o nome e coloca no campo de texto, para que seja editado;
    dadosLista.splice(dadosLista[(i - 1)], 1);  //método splice - pega o valor na posição, e remove o valor daquela posição;
}

//função para excluir nomes da lista
function excluir(i)
{
    dadosLista.splice((i - 1), 1); //exclui do array
    document.getElementById('tabela').deleteRow(i); //exclui da tabela tambem, exclui tambem a linha inteira da tabela;
}