const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class MlController {
    // GET /ml/linearregression
    linearregression(req, res, next) {
        //res.render('ml/linearregression');
        Promise.all([Course.find({})])
            .then(([courses]) => res.render('ml/linearregression', {courses: multipleMongooseToObject(courses)}))
            .catch(next);
    }
}

module.exports = new MlController();