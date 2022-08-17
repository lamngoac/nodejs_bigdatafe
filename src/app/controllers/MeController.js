const Course = require('../models/Course');
const Student = require('../models/Student');
const Learn = require('../models/Learn');
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class MeController {
    // GET /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => res.render('me/stored-courses', {deletedCount, courses: multipleMongooseToObject(courses)}))
            .catch(next);
    }

    // GET /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }

    // GET /me/stored/students
    storedStudents(req, res, next) {
        Promise.all([Student.find({}), Student.countDocumentsDeleted()])
            .then(([students, deletedCount]) => res.render('me/stored-students', {deletedCount, students: multipleMongooseToObject(students)}))
            .catch(next);
    }

    // GET /me/trash/students
    trashStudents(req, res, next) {
        Student.findDeleted({})
            .then(students => res.render('me/trash-students', {
                students: multipleMongooseToObject(students)
            }))
            .catch(next);
    }

    // GET /me/stored/learns
    storedLearns(req, res, next) {
        Promise.all([Learn.find({}), Learn.countDocumentsDeleted()])
            .then(([learns, deletedCount]) => res.render('me/stored-learns', {deletedCount, learns: multipleMongooseToObject(learns)}))
            .catch(next);
    }

    // GET /me/trash/learns
    trashLearns(req, res, next) {
        Learn.findDeleted({})
            .then(learns => res.render('me/trash-learns', {
                learns: multipleMongooseToObject(learns)
            }))
            .catch(next);
    }
}

module.exports = new MeController();