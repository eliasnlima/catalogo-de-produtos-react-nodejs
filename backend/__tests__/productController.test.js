const productController = require('../src/controllers/productController')

describe('product Controller - addProduct', () => {

    test('deve cadastrar novo produto e exibir mensagem de sucesso', () => {

        const req = {
            body: {
            nome: "Teclado Gamer",
            preco: 1200
        }
        }

        const res = {
            json: jest.fn()
        }
 
        productController.addProduct(req,res)

        expect(res.json).toHaveBeenCalledWith({message: "Produto cadastrado!"})
    })
})