jest.mock('../src/data/products', () => ({
    produtos: []
}))

const {produtos} = require('../src/data/products')
const {productController, resetId} = require('../src/controllers/productController')

describe('product Controller - addProduct', () => {

    beforeEach(() => {
        produtos.length = 0
        resetId()
    })

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

    test('Deve retornar erro, pois preço precisa ser número', () => {
        
        const req = {
            body: {
            nome: "Teclado Gamer",
            preco: "preco"
        }
        }

        const res = {
            json: jest.fn(),
            status:jest.fn().mockReturnThis()
        }

        productController.addProduct(req,res)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({message: "Preço deve ser um número!" })
    })

    test('Deve adicionar novo produto a lista', () => {
        const req = {
            body: {
                nome: "Teclado",
                preco: 1200
            }
        }

        const res = {
            json: jest.fn()
        }

        productController.addProduct(req,res)

        expect(produtos.length).toBe(1)
        expect(produtos[0]).toEqual({
            id: 1,
            nome: "Teclado",
            preco: 1200
        })
        expect(res.json).toHaveBeenCalledWith({message: "Produto cadastrado!"})


    })
}) 