const clase = require('../databases/ProdutcsClass.js')

const productos = new clase('./productos_resultado.txt')

const productsController = {
    saveProduct: function (producto) {
      return productos.save(producto)
    },
    getAllProducts: function () {
      return productos.getAll()
    }
  }
  
module.exports = productsController