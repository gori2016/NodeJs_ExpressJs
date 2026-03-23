const {getTodosFavoritos, inserirLivroFavorito} = require("../Servicos/favorito")

function getFavoritos(req, res) {
    try {

        const livros = getTodosFavoritos()
        res.send(livros)


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


function postLivroFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        inserirLivroFavorito(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso")


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postLivroFavorito

}