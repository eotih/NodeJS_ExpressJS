const express = require('express')
const router = express.Router()

const meController = require('../app/controller/MeController')

router.get('/stored/music', meController.storedMusic)

module.exports = router