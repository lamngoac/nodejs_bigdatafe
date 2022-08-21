const newsRouter = require('./news');
const meRouter = require('./me');
const studensRouter = require('./students');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const learnsRouter = require('./learns');
const mlRouter = require('./ml');
const visualizationsRouter = require('./visualizations');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/visualizations', visualizationsRouter);
    app.use('/ml', mlRouter);
    app.use('/me', meRouter);
    app.use('/learns', learnsRouter);
    app.use('/students', studensRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
