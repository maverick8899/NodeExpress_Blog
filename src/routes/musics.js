const express = require('express');
const musicsController = require('../app/controller/musicsController');
const router = express.Router();

//nó match từ trên xuống nên cấp cha để dưới cùng
router.get('/:slug', musicsController.show);
//đi vào trang con luôn nên không cần đường dẫn này
// router.get('/', musicsController.index);

module.exports = router;
