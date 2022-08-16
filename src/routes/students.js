const express = require('express');
const router = express.Router();

const studentsController = require('../app/controllers/StudentsController');

router.get('/:slug', studentsController.show);

module.exports = router;