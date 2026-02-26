 
 //modulo fs é responsável por ler, criar, atualizar, deletar e escrever arquivos, ele é nativo do node, ou seja, não precisa ser instalado
 const fs = require("fs")


 // essa parte do código faz parte do controlador do livro é aqui que estão as funções que vão ser executadas quando as rotas forem acessadas no app.js
 function getLivros (req, res){
    try {
        const livros = JSON.parse(fs.readFileSync('livros.json'))
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
 }

 module.exports = {
    getLivros
 }
    