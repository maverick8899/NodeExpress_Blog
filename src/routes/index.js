const newRouter = require('./news');
const siteRouter = require('./site');
const musicsRouter = require('./musics');
const userRouter = require('./users_ReactBase');

function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    app.use('/musics', musicsRouter);
    app.use('/users', userRouter);
}

module.exports = route;
