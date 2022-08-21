const express = require('express');
const router = express.Router();

const mlController = require('../app/controllers/MlController');

router.get('/linearregression', mlController.linearregression);

module.exports = router;