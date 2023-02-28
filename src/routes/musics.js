const express = require('express');
const musicsController = require('../app/controller/musicsController');
const router = express.Router();

//nó match từ trên xuống nên cấp cha để dưới cùng
router.get('/create', musicsController.create);
router.post('/store', musicsController.store);
router.get('/:slug', musicsController.show);
//đi vào trang con luôn nên không cần đường dẫn này

module.exports = router;
