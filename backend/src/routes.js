import { Router } from "express";
import productController from "./controllers/productController.js";

const routes = new Router()

routes.get('/', (req, res) => {
    res.json({status: "ok"})
})

routes.post('/produtos/add', productController.addProduct)
routes.get('/produtos', productController.showProduct)

export default routes;