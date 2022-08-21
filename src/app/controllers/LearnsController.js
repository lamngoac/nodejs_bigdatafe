const Learn = require('../models/Learn');
const Student = require('../models/Student');
const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class LearnsController {
    // GET /learns/show 
    show(req, res, next) {
        // find learn follow studentCode
        // Learn.find().select({studentCode: 'SV001'}).exec()
        //     .then(learns => res.render('learns/show', { learns: multipleMongooseToObject(learns) }))
        //     .catch(next);

        // var query = Learn.find({}).select('studentCode -_id');
        // query.exec(function (err, someValue) {
        //     if (err) return next(err);
        //     res.send(someValue);
        // });

        Student.find({ studentCode: req.params.studentCode })
            .then(learns => res.render('learns/show', { learns: multipleMongooseToObject(learns) }))
            .catch(next);
    }

    // GET /learns/create
    create(req, res, next) {
        Promise.all([Student.find({}), Course.find({})])
            .then(([students, courses]) => res.render('learns/create', { students: multipleMongooseToObject(students), courses: multipleMongooseToObject(courses) }))
            .catch(next);
        //res.render('learns/create');
    }

    // POST /learns/store
    store(req, res, next) {
        const learn = new Learn(req.body);
        learn.save()
            .then(() => res.redirect('/me/stored/learns'))
            .catch(next);
    }
    
    // GET /learns/:id/edit
    edit(req, res, next) {
        Learn.findById(req.params.id)
            .then(learn => res.render('learns/edit', { learn: mongooseToObject(learn) }))
            .catch(next);
    }
    
    // PUT /learns/:id
    update(req, res, next) {
        Learn.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect('/me/stored/learns'))
            .catch(next);
    }
    
    // DELETE /learns/:id
    delete(req, res, next) {
        Learn.delete({_id: req.params.id})
            .then(() => res.redirect('/me/stored/learns'))
            .catch(next);
    }
    
    // DELETE /learns/:id/force
    forceDelete(req, res, next) {
        Learn.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/me/trash/learns'))
            .catch(next);
    }
    
    // PATCH /learns/:id/restore
    restore(req, res, next) {
        Learn.restore({_id: req.params.id})
            .then(() => res.redirect('/me/stored/learns'))
            .catch(next);
    }

    // POST /courses/handle-form-actions
    handleFormActions(req, res, next) { 
        //res.json(req.body);
        switch(req.body.action) {
            case 'delete':
                Learn.delete({_id: {$in: req.body.learnIds}})
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ massage: 'Action is invalid' })
        }
    }
}

module.exports = new LearnsController();