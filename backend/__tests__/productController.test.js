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

describe('productController - showProduct', () => {
    test('Deve mostrar todos os produtos', () => {

        const res = {
            json: jest.fn()
        }   

        productController.showProduct(res)

        expect(res.json).toHaveBeenCalledWith({produtos})

    })

    test('Se não tiver produto cadastrado, deve retonar mensagem', () => {
        
        produtos.length = 0

        const res = {
            json: jest.fn()
        }

        productController.showProduct(res)

        expect(res.json).toHaveBeenCalledWith({message: "Ainda não existem produtos cadastrados!"})
    })
})

describe('productController - deleteProduct', () => {

    beforeEach(() => {

        produtos.push(
            {
                id: 1,
                nome: "Computador",
                preco: 1200
            },
            {
                id: 2,
                nome: "Teclado",
                preco: 80
            },
            {
                id: 3,
                nome: "Mouse",
                preco: 150
            }
        )
        
    })

    test('Deve excluir o item com o id indicado', () => {

        const id = 1
        
        const req = {
            params: {
                id: String(id)
            }
        }   

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        productController.deleteProduct(req,res)

        expect(produtos).toEqual([
            {
                id: 2,
                nome: "Teclado",
                preco: 80
            },
            {
                id: 3,
                nome: "Mouse",
                preco: 150
            },
        ])
        expect(res.json).toHaveBeenCalledWith({produtos})
    })

    test('Se não exitir nenhum produto com o ID indicado, deve retornar erro', () => {
        
        const id = 99

        const req = {
            params: {
                id: String(id)
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        productController.deleteProduct(req,res)

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({error: "Produto não encontrado"})
    })

})