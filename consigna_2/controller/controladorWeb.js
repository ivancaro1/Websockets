function webGetController(req, res) {
    res.sendFile('index.html', { root: './public' })
}

module.exports = {
    webGetController
}