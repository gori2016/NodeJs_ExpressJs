 function getLivros (req, res){
    try {
        res.send("Olá alura do Brasil")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
 }

 module.exports = {
    getLivros
 }
    