// const Course = require('../models/Course');
// const Student = require('../models/Student');
// const Learn = require('../models/Learn');
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class VisualizationsController {
    // GET /visualizations/chart
    chart(req, res) {
        res.render('visualizations/chart');
        //res.render('visualizations/chart');
    }

    // GET /visualizations/course
    course(req, res) {
        res.render('visualizations/course');
    }

    // GET /visualizations/learn
    learn(req, res) {
        res.render('visualizations/learn');
    }
}

module.exports = new VisualizationsController();