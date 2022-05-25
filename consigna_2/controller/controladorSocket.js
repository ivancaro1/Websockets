const { Server: Socket } = require('socket.io')

const ProductController = require('./controladorApi')
const ChatController = require('./controladorChat')
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
    socket.on('message', async message => {
      await ChatController.saveMessage(message)
      io.sockets.emit('message', await ChatController.getAllMessages())
    })
    socket.on('getAllMessages', async () => {
      socket.emit('message', await ChatController.getAllMessages())
    })
  })
  return io
}

module.exports = socketController