const { mongooseToObject } = require('../../utils/mongoose');
const Music = require('../model/Music');

class MusicsController {
    //GET musics/:slug
    show(req, res, next) {
        Music.findOne({ slug: req.params.slug })
            .then((music) => res.render('music/show', { music: mongooseToObject(music) }))
            .catch(next);
    }
    //GET musics/create
    create(req, res, next) {
        res.render('music/create');
    }
    //POST musics/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.ID}/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZCd3hz0Zq7Pr6MnWdyHRjhKFTcw`;
        const music = new Music(formData); //tạo ra một instance mới của model Music với dữ liệu từ formData.
        music
            .save()
            .then(() => res.redirect('/')) //điều hướng
            .catch((err) => res.send(err));
    }
    //GET musics/:id/edit.tìm model hợp với id params rồi truyền vào edit.hbs=> show form edit
    edit(req, res, next) {
        Music.findById(req.params.id).then((music) => res.render('music/edit', { music: mongooseToObject(music) }));
    }
    //PUT musics/:id. click Save
    //updateOne có thể thay đổi cả Key lẫn value
    update(req, res, next) {
        Music.updateOne({ id: req.params.id }, req.body)
            .then(() => res.redirect('/')) //điều hướng
            .catch((err) => res.send(err));
    }
    //DELETE musics/:id
    delete(req, res, next) {
        Music.deleteOne({ id: req.params.id })
            .then(() => res.redirect('back')) //điều hướng người dùng trở lại trang trước đó mà họ đã truy cập
            .catch((err) => res.send(err));
    }
}

module.exports = new MusicsController();
