const Student = require('../models/Student');
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class StudentsController {
    // GET /students/:slug
    show(req, res, next) {
        Student.findOne({ studentCode: req.params.studentCode })
            .then(student => {
                res.render('students/show', { student: mongooseToObject(student) });
            })
            .catch(next);
    }

    // GET /students/create
    create(req, res, next) {
        res.render('students/create');
    }

    // POST /students/store
    store(req, res, next) {
        const student = new Student(req.body);
        student.save()
            .then(() => res.redirect('/me/stored/students'))
            .catch(next);
    }

    // GET /students/:id/edit
    edit(req, res, next) {
        Student.findById(req.params.id)
            .then(student => res.render('students/edit', { student: mongooseToObject(student) }))
            .catch(next);
        ;
    }

    // PUT /students/:id
    update(req, res, next) {
        Student.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect('/me/stored/students'))
            .catch(next);
    }

    // DELETE /students/:id
    delete(req, res, next) {
        Student.delete({_id: req.params.id})
            .then(() => res.redirect('/me/stored/students'))
            .catch(next);
    }

    // DELETE /students/:id/force
    forceDelete(req, res, next) {
        Student.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/me/trash/students'))
            .catch(next);
    }

    // PATCH /students/:id/restore
    restore(req, res, next) {
        Student.restore({_id: req.params.id})
            .then(() => res.redirect('/me/trash/students'))
            .catch(next);
    }

    // POST /courses/handle-form-actions
    handleFormActions(req, res, next) { 
        //res.json(req.body);
        switch(req.body.action) {
            case 'delete':
                Student.delete({_id: {$in: req.body.studentIds}})
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ massage: 'Action is invalid' })
        }
    }
}

module.exports = new StudentsController();