const siteRouter = require('./site.route');
const apiRouter = require('./api.route');

function route(app) {
    app.use('/', siteRouter);
    app.use('/api', apiRouter);
}

module.exports = route;