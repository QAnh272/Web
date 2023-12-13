const express = require('express');
const router = express.Router();

const courseController = require ('../app/controllers/CourseController')

router.get('/created', courseController.created)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.post('/handle-form-actions', courseController.handleFormActions)
router.post('/restore-form-actions', courseController.restoreFormActions)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id', courseController.destroy)
router.delete('/:id/force', courseController.forceDestroy)
router.get('/:slug', courseController.show)
    
module.exports = router;