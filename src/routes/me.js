const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);
router.get('/stored/students', meController.storedStudents);
router.get('/trash/students', meController.trashStudents);
router.get('/stored/learns', meController.storedLearns);
router.get('/trash/learns', meController.trashLearns);

module.exports = router;