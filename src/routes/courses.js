const express = require('express')
const router = express.Router()

const courseController = require('../app/controller/CourseController')

router.get('/create', courseController.create)
router.get('/:slug', courseController.show)
router.post('/handle-form-action', courseController.handleFormAction)
router.get('/:id/edit', courseController.edit)
router.post('/store', courseController.store)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.forceDelete)

module.exports = router