const clase = require('../databases/ProdutcsClass.js')

const productos = new clase('./productos_resultado.txt')


const productsController = {
    async getAll (req,res) {
        let allProducts;
        try {
            allProducts = await productos.getAll()
            const nombre = allProducts
            const dato = {
                nombres:nombre,
                hayProduct: Boolean(nombre.length > 0),
            }
            res.render('datos', dato)
        } catch(err) {
          console.log(err)
        }
      
    },
    async save (req,res){
        await productos.save(req.body);
        res.redirect('/productos')
    }
}


module.exports = { productsController };