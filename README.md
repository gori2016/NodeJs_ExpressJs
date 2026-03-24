📚 AuraBooks Server

API backend do projeto AuraBooks, desenvolvida com Node.js e Express, responsável pelo gerenciamento de livros.

🚀 Tecnologias utilizadas
Node.js
Express
JavaScript (ES6+)
📦 Funcionalidades
📖 Listar todos os livros
🔍 Buscar livro por ID
➕ Adicionar novos livros
✏️ Atualizar informações de livros
❌ Remover livros


⚙️ Como rodar o projeto
1. Clonar o repositório

git clone https://github.com/gori2016/AuraBooks_Server.git

2. Acessar a pasta
cd AuraBooks_Server

3. Instalar dependências
npm install

4. Rodar o servidor
npm run dev

| Método | Rota        | Descrição             |
| ------ | ----------- | --------------------- |
| GET    | /livros     | Lista todos os livros |
| GET    | /livros/:id | Busca livro por ID    |
| POST   | /livros     | Cria um novo livro    |
| PUT    | /livros/:id | Atualiza um livro     |
| DELETE | /livros/:id | Remove um livro       |

📌 Exemplo de requisição
Criar um livro
POST /livros
{
  "id": 1,
  "nome": "Livro exemplo"
}

🧠 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de:

Praticar construção de APIs REST
Aprender conceitos de backend com Node.js
Trabalhar com rotas, controllers e manipulação de dados
