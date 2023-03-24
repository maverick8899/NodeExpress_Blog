const { multipleMongooseToObject } = require('../../utils/mongoose');
const Music = require('../model/Music');

//Render Store
class MeController {
    //GET me/stored/songs
    storedSongs(req, res, next) {
        Promise.all([Music.find().sortable(req), Music.countDocumentsDeleted(), Music.countDocuments()])
            .then(([musics, deleteCount, amountSong]) => {
                const renderTick = amountSong !== 0;
                res.render('me/storedSongs', { renderTick, deleteCount, musics: multipleMongooseToObject(musics) });
            })
            .catch(next);
    }
    //GET me/trash/songs
    recycleBinSongs(req, res, next) {
        Promise.all([Music.findDeleted(), Music.countDocuments(), Music.countDocumentsDeleted()])
            .then(([musics, amountSong, amountDeleteSong]) => {
                const renderTick = amountDeleteSong !== 0;
                res.render('me/recycleBin', { renderTick, amountSong, musics: multipleMongooseToObject(musics) });
            })
            .catch(next);
    }
}

module.exports = new MeController();
