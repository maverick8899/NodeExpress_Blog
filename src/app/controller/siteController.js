const { multipleMongooseToObject } = require('../../utils/mongoose');
const Music = require('../model/Music');
class SiteController {
    //GET news
    //next: chuyển luồng điều khiển từ middleware hiện tại sang middleware tiếp theo trong chuỗi middleware.
    index(req, res, next) {
        // res.render('home');
        Music.find({})
            .then((musics) => res.render('home', { musics: multipleMongooseToObject(musics) }))
            .catch(next);
    }
    //GET show
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
