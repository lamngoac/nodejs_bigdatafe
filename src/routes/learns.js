const express = require('express');
const router = express.Router();

const learnsController = require('../app/controllers/LearnsController');

router.get('/create', learnsController.create);
router.post('/store', learnsController.store);
router.get('/:id/edit', learnsController.edit);
router.post("/handle-form-actions", learnsController.handleFormActions);
router.put('/:id', learnsController.update);
router.patch('/:id/restore', learnsController.restore);
router.delete('/:id', learnsController.delete);
router.delete('/:id/force', learnsController.forceDelete);
router.get('/:slug', learnsController.show);

module.exports = router;