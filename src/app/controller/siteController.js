const Musics = require('../model/Musics');

class SiteController {
    //GET news
    index(req, res) {
        // res.render('home');
        Musics.find({}, function (err, musics) {
            !err ? res.json(musics) : res.status(400).json({ error: 'ERROR! ' });
        });
    }

    //GET show
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
