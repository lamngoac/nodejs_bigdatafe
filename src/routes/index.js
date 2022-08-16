const newsRouter = require('./news');
const meRouter = require('./me');
const studensRouter = require('./students');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/students', studensRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
