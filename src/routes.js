const express = require('express');
const routes = express.Router();
const productController = require('./controllers/productController')

routes.get('/products',productController.index);// req=> requisição ao servidor || res=> resposta do servidor
routes.get('/products/:id',productController.show)
routes.post('/products',productController.store)
routes.put('/products/:id',productController.update)
routes.delete('/products/:id',productController.destroy)
module.exports = routes;