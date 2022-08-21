const express = require('express');
const router = express.Router();

const visualizationsController = require('../app/controllers/VisualizationsController');

router.get('/chart', visualizationsController.chart);
router.get('/course', visualizationsController.course);
router.get('/learn', visualizationsController.learn);

module.exports = router;