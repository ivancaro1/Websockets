const express = require('express')
const webRouter = express.Router()
const { productsController } = require('../controllers/controladorApi.js')


webRouter.get('/', (req, res) => {
    res.render('layouts/layout')
})

webRouter.get('/productos', productsController.getAll);
webRouter.post('/productos', productsController.save);

module.exports = { webRouter }