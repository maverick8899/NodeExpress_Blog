const { multipleMongooseToObject } = require('../../utils/mongoose');
const Music = require('../model/Music');

//Render Store
class MeController {
    //GET me/stored/songs
    storedSongs(req, res, next) {
        Promise.all([Music.find({}), Music.countDocumentsDeleted()])
            .then(([musics, deleteCount]) => {
                res.render('me/storedSongs', { deleteCount, musics: multipleMongooseToObject(musics) });
            })
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
