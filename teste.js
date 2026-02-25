const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json", "utf-8"))

const dadoNovo = {
    "id": 4,
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954
}

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, dadoNovo]))

console.log(JSON.parse(fs.readFileSync("livros.json")))