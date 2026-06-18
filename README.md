# 🎬 Sistema de Gerenciamento de Filmes Favoritos

Uma aplicação web desenvolvida em **React** para cadastrar, visualizar e pesquisar uma lista de filmes favoritos. 

Este projeto foi construído como parte das atividades da disciplina de desenvolvimento na UTFPR, com o objetivo de demonstrar a aplicação prática de conceitos fundamentais do ecossistema React.

## ✨ Funcionalidades

* **Cadastro de Filmes:** Adicione filmes informando Nome, Gênero, Ano e Nota.
* **Listagem Dinâmica:** Exibição dos dados em cards interativos.
* **Renderização Condicional:** * Filmes com nota ≥ 8 recebem o selo **⭐ Filme Recomendado**.
  * Filmes com nota < 8 recebem o selo **📌 Filme Comum**.
* **Filtro de Pesquisa:** Encontre filmes rapidamente através da barra de busca.
* **Estatísticas:** Acompanhe o contador de filmes cadastrados em tempo real.
* **Eventos Interativos:** Dê um duplo clique nos cards para favoritar o filme selecionado.

## 🚀 Tecnologias e Conceitos Aplicados

O projeto foi inicializado utilizando o **Vite** para um ambiente de desenvolvimento rápido e moderno. Os principais conceitos abordados incluem:

* **React.js**
* **CSS Modules:** Estilização componentizada e isolada, evitando conflitos de classes.
* **Componentização:** Arquitetura dividida de forma lógica (`App`, `FormFilme`, `ListaFilmes`, `CardFilme`).
* **Hooks (useState):** Gerenciamento reativo de variáveis e listas.
* **State Lifting:** Centralização do estado principal no componente pai (`App`) para distribuição inteligente.
* **Props:** Comunicação fluida para envio de dados e funções entre os componentes.
* **Renderização de Listas:** Uso eficiente do método `.map()`.

## 🛠️ Como Executar Localmente

1. Clone este repositório no seu ambiente (ou baixe o arquivo .zip):
```bash
git clone [https://github.com/peluca2007/sistema-filmes.git](https://github.com/peluca2007/sistema-filmes.git)
