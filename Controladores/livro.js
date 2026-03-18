const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deleteLivro } = require("../Servicos/livro")


// essa parte do código faz parte do controlador do livro é aqui que estão as funções que vão ser executadas quando as rotas forem acessadas no app.js
function getLivros(req, res) {
    try {
        // aqui é onde a função getTodosLivros é chamada, ela lê o arquivo livros.json e retorna os dados para a rota do livro.js
        const livros = getTodosLivros()
        res.send(livros)

        //tratamento de erros
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


function getLivro(req, res) {
    try {
        const id = Number(req.params.id)
        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Id inválido, por favor insira um id válido")
        }


        //tratamento de erros
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro Inserido com Sucesso")
        } else {
            res.status(422)
            res.send("Nome invalido")
        }



    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = Number(req.params.id)
        if (id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send("Livro Modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido, por favor insira um id válido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function apagarLivro(req, res) {
    try {
        const id = Number(req.params.id)
        if (id && Number(id)) {
            const body = req.body
            deleteLivro(id, body)
            res.send("Livro Deletado com Sucesso")
        } else {
            res.status(422)
            res.send("Id inválido, por favor insira um id válido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



module.exports = {
    getLivros, getLivro, postLivro, patchLivro, apagarLivro
}
