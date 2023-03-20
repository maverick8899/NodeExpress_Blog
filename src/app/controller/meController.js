const { multipleMongooseToObject } = require('../../utils/mongoose');
const Music = require('../model/Music');

class MeController {
    //GET me/stored/songs
    storedSongs(req, res, next) {
        Music.find({})
            .then((musics) => res.render('me/storedSongs', { musics: multipleMongooseToObject(musics) }))
            .catch(next);
    }
    //GET me/trash/songs
    recycleBinSongs(req, res, next) {
        Music.findDeleted()
            .then((musics) => res.render('me/recycleBin', { musics: multipleMongooseToObject(musics) }))
            .catch(next);
    }
}

module.exports = new MeController();
