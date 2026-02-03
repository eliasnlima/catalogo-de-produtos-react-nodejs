import produtos from '../data/products.js'

var id = 0;

class productController{

    addProduct(req,res) {
        
        id = id + 1
        const { nome, preco } = req.body

        const produto = {
            "id": id,
            "nome": nome,
            "preco": preco
        }

        produtos.push(produto)

        res.json({message: "Produto cadastrado!"})
        
    }
}

export default new productController()