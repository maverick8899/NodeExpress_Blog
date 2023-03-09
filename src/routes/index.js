const newRouter = require('./news');
const siteRouter = require('./site');
const musicsRouter = require('./musics');
const userRouter = require('./userRoute_ReactBase');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter);
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    app.use('/musics', musicsRouter);
    app.use('/users', userRouter);
}

module.exports = route;
