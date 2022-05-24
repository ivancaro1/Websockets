const { Server: Socket } = require('socket.io')

const ProductController = require('./controladorApi')
function socketController (server) {
  const io = new Socket(server)
  io.on('connection', socket => {
    console.log('Ingreso de cliente')
    socket.on('disconnect', () => {
      console.log('Salida de cliente')
    })
    socket.on('producto', async producto => {
      await ProductController.saveProduct(producto)
      io.sockets.emit('producto', await ProductController.getAllProducts())
    })
    socket.on('getAllProducts', async () => {
      socket.emit('producto', await ProductController.getAllProducts())
    })
  })
  return io
}

module.exports = socketController