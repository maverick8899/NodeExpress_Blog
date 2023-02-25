const newRouter = require('./news');
const siteRouter = require('./site');
const musicsRouter = require('./musics');

function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    app.use('/musics', musicsRouter);
}

module.exports = route;
