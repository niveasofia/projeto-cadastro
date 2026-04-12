# Projeto - Cadastro

<p align="center">
    <img src="https://img.shields.io/badge/CADASTRO-%23DB25D5?style=for-the-badge&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2UlEQVR4nNWaTWwVVRTHf7QGCIjly6C1JVEqLVTDwsQPTFy4ASJ14cZKowtgU6wEgcTACmNiV350YYTqgo0JXy0SoHxpoi5IWZDwoRKKLAgxMUShYCW%2Btq9jDvmPuXmm430z7%2BUOv%2BQm772558w5vXfOPedMITtNQAfwPtADfAxsB14GHiDn1AJrgR%2BBKGH8ArxETnkUOO0Y%2ByuwD%2FgE2KxhK3NZ1%2B8CnwHLyRGzHQOHgFeAKZPMrQE%2BKlmhPcAMcsBuGXQWqPOYb84sBTYBNyTbT2AWAuPAGLAshfwTwE05s5KAbJARfRl07HC2WDAOyoh1GXQskY6rBGRQRjyfMWz%2FDUyEfOivyJGWjHpuS49FwCBckgHNGfX8JT0PEYjvZUCWk3qudIwQkD0yoj2Djuek4wIB2S4jujPo2CodnxOQFTLi2ww6DkvHGgKySkbcSZmeTwWGpcNytGB8JyPeS0gUkzCZbdLxDQG5JCPS5Fkxy6TjJwKyX0ZYQZWW9dJh9Usw3pIR11Q8lctmyZqONwlILXBAedJt1Rq%2B1DipSZ90BeecDGotQ%2BZpydhzlht6ZNSHZch0S2YnOeIZGWXV3sOe%2BdUfknmRnPG1DLOzZV7CvFnACc09RQ55DPjNo9Bq0Rw70ReRU87KyBcS5iz1LG0bgS7gmALCiIZ9HgDeBhqoEhc9ViSu0a8nrOwX6s4kdSwjdW96gfpKOzKkG1hoTfpLR%2BpplfKqElC7XlC9064KdKaGfX5D1wpO0tpWKScWaOkjGTsZdTpAR0u2xjtA0UlXHvfsix2QTFFbMRO2Auel8LjH%2FL2a%2B5WzEkVtp3dT3H%2BLZItpV6ZVld2o0%2Fu1hvb%2FUa9%2B8bN6JuLtlMYJ15lIaY%2BPDfcKqNdUFU44y7q7zHaOFVXGl57Zb6SRRJ%2Fm7EqaNF17MM5WI7VxTOgp0tGoLVHweCYiD0cWSdeYVvo%2FVdxavfOIldnLnI3AHLLRVUbfN%2FJwBK1spL70v1i4O%2BQoGaxw13xAei2cVsqRDs07Ev8wDfhBP%2F4OvE7liV8QLa6gI82l5cGnzgnsc6M0xNHKEkmXqMzhMss5JHlSD0xRnUDuV0c%2B0JeTVJeqb60z%2BtJJdan6w34rxfKWM%2BwfCVAqXq3w2%2BkKVWvEzbgGPYsFJYBZHWlKOhCrTa8MtCw2qyP9IRsa9U70ssQv6%2BuJYeARAtHmpPFbUjoxLh1Bu%2Fpx3hUXVn2ejYkmZzsVFTxywWqnjVpQBFqjzsuDGi0KsfudOmg4DytRynx1Lsc8ot%2BYygivQioUFj7tLDgK%2FAz8qWGf7bCza4kh9h8i85xH7M3l9AAAAABJRU5ErkJggg%3D%3D&label=PROJETO&labelColor=%2361DB25" />
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
    <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS-%23663399?style=for-the-badge&logo=css&logoColor=%23fffff&color=%231572B6" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>


## 📌 Índice
1. [Descrição](#-descrição)
2. [Funcionalidades](#-funcionalidades)
3. [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
4. [Demonstração da Página](#-demonstração-da-página)
5. [Deploy](#-deploy)
6. [Como executar o projeto](#-como-executar-o-projeto)
7. [Sobre a Autora](#-sobre-a-autora)


## 📋 Descrição
<p align="justify">
    &emsp;&emsp; Projeto criado na disciplina de Front-End, com a orientação do professor [Leonardo Rocha](https://github.com/leonardossrocha). <br>
    &emsp;&emsp; O projeto consiste em uma tela de acesso onde o usuário informa seus dados (e-mail e senha) e ao clicar em entrar, o usuário é encaminhado para uma tela de cadastro bem simples, onde ele informa apenas nome. <br>
    &emsp;&emsp; A tela de cadastro faz uso de arrow function para captar e salvar os nomes cadastrados. Os nomes são exibidos na tela através de uma tabela, seguidos por dois botões sendo eles editar e excluir. O botão editar chama o nome novamente para o campo de texto e permite ao usuário, alterar o nome cadastrado. O nome é removido daquele ponto da lista e adicionado novamente em uma nova posição. O botão excluir, exclui o nome cadastrado, tanto da tabela quanto da lista onde ele foi armazenado.
</p>


## ✨ Funcionalidades

- **Botão - Entrar:** Na tela de acesso, é responsável por validar se os campos de e-mail e senha foram preenchidos. Em caso de negativa exibe um 'alert', solicitando o preenchimento de todos os campos. Caso o usuário informe todos os campos, ele é encaminhado diretamente para a tela de cadastro.

- **Armazenamento:** Permite armazenar uma quantidade indeterminada de nomes na memória da variável 'dadosLista', ao recarregar a página os dados são perdidos.

- **Botão - Editar:** Permite a edição do nome cadastrado.

- **Botão - Excluir:** Remove da lista e da memória, o nome informado.


## 🛠️ Tecnologias Utilizadas

- **Bootstrap** → Estrutura base da página de login e estilização de componentes como botões, inputs e tabela.
- **HTML5** → Estrutura da página.
- **CSS3** → Estilização personalizada, incluindo gradiente de fundo, e ajustes visuais sobre o Bootstrap.
- **Javascript** → Validação de formulário, gerenciamento do array de dados e renderização dinâmica da tabela com as ações de salvar, editar e excluir.


## 📸 Demonstração da Página
<div align="center">
  <img src="amostra.gif" height="450" controls> <br> <br>
</div>


## 🔗 Deploy

<p align="center">
    <a href="https://niveasofia.github.io/projeto-cadastro/">
        <img src="https://img.shields.io/badge/PROJETO-%2361DB25?style=for-the-badge&label=ACESSE%20O&labelColor=%23DB25D5"/>
    </a>
</p>


## 🚀 Como executar o projeto

⚠️ Necessário ter o Git já devidamente instalado, e configurado em seu computador. ⚠️ <br>

Utilizando o git clone, clone o repositório para seu dispositivo local e abra o arquivo **index.html** <br>

1. Acesse uma pasta do seu computador, através do terminal (VSCode, CMD). <br>
*Nessa pasta que o git irá armazenar os arquivos, vindo do repositório.*
2. Utilize: `cd` + (endereço da pasta). Exemplo: cd C:\Users\usuário\documentos\projetos <br>
3. Estando dentro da pasta através do terminal, use o comando: `git clone https://github.com/niveasofia/projeto-cadastro.git <br>`
4. Localize a pasta onde os arquivos foram clonados. <br>
*O git clone baixa o repositório em seu computador, como uma pasta.* <br>
5. Abra a pasta clonada. <br>
6. Abra o arquivo *`index.html`* no navegador. <br>


## 👩‍💻 Sobre a Autora

[Nivea Sofia](https://github.com/niveasofia) <br>
<p>Estudante de Engenharia de Software na Unicesumar, aprimorando e expandindo os conhecimentos sobre HTML, CSS e Javascript em cada projeto. </p>
