const {produtos} = require('../data/products')

let id = 0;

class productController{

    addProduct(req,res) {
        
        id = id + 1
        const { nome, preco } = req.body

        if (typeof preco !== "number"){
            res.status(400).json({message: "Preço deve ser um número!"})
        }
        const produto = {
            "id": id,
            "nome": nome,
            "preco": preco
        }

        produtos.push(produto)

        res.json({message: "Produto cadastrado!"})
        
    }

    showProduct(req,res) {
        
        return res.json({produtos})
    }

    deleteProduct(req,res) {
        
        const { id } = req.params
        const idNumber = Number(id)

        const index = produtos.findIndex(p => p.id === idNumber)

        if (index === -1) {
            return res.status(404).json({ error: "Produto não encontrado" })
        }

        produtos.splice(index, 1)

        return res.json({produtos})


    }
}


function resetId() {
    id = 0
}

module.exports = {
    productController: new productController(),
    resetId
}