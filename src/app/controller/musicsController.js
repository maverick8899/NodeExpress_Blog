const { mongooseToObject } = require('../../utils/mongoose');
const Music = require('../model/Music');

class MusicsController {
    //GET show
    show(req, res, next) {
        Music.findOne({ slug: req.params.slug })
            .then((music) => res.render('music/show', { music: mongooseToObject(music) }))
            .catch(next);
    }
}

module.exports = new MusicsController();
