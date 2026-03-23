function getTodosFavoritos() {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'))
    return livros
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'))
    const livrosFiltrados = livros.filter((livro) => livro.id !== id
    )
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function inserirLivroFavorito(id){
    const livros = JSON.parse(fs.readFileSync('livros.json')) 
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const livroInserido = livros.find(livro => livro.id === id)
    const novaListadeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListadeLivrosFavoritos))
    
}


module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    inserirLivroFavorito
}