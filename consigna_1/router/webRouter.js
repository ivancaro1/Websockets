const express = require('express')
const webRouter = express.Router()
const { productsController } = require('../controllers/controladorApi.js')


webRouter.get('/', (req, res) => {
    res.render('formulario')
})

webRouter.get('/productos', productsController.getAll);
webRouter.post('/productos', productsController.save);

module.exports = { webRouter }