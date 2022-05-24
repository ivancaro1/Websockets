const { Router } = require('express')
const { webGetController } = require('../controller/controladorWeb.js')

const router = new Router()

router.get('/', webGetController)
router.post('/', webGetController)

module.exports = router