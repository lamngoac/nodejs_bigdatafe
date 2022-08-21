const express = require('express');
const router = express.Router();

const studentsController = require('../app/controllers/StudentsController');

router.get('/create', studentsController.create);
router.post('/store', studentsController.store);
router.get('/:id/edit', studentsController.edit);
router.post("/handle-form-actions", studentsController.handleFormActions);
router.put('/:id', studentsController.update);
router.patch('/:id/restore', studentsController.restore);
router.delete('/:id', studentsController.delete);
router.delete('/:id/force', studentsController.forceDelete);
router.get('/:studentCode', studentsController.show);

module.exports = router;