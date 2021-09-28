const express = require('express')
const router = express.Router()

const meController = require('../app/controller/MeController')

router.get('/stored/music', meController.storedMusic)
router.get('/trash/music', meController.trashMusic)

module.exports = router