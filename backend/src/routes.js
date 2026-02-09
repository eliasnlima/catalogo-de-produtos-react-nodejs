const { Router } = require('express')
const productController = require('./controllers/productController')

const routes = new Router()

routes.get('/', (req, res) => {
    res.json({status: "ok"})
})

routes.post('/produtos/add', productController.addProduct)
routes.get('/produtos', productController.showProduct)
routes.delete('/produto/delete/:id', productController.deleteProduct)

module.exports = routes;