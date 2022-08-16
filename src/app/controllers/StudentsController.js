const Student = require('../models/Student');
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class StudentsController {
    // GET /students/:slug
    show(req, res, next) {
        Student.findOne({ slug: req.params.studentCode })
            .then(student => {
                res.render('students/show', { student: mongooseToObject(student) });
            })
            .catch(next);
    }
}

module.exports = new StudentsController();