const clase = require('../databases/ChatClass.js')

const messages = new clase('./chat.txt')

const messagesController = {
  getAllMessages: function () {
    return messages.getAll()
  },
  saveMessage: function (message) {
    return messages.save(message)
  }
}

module.exports = messagesController