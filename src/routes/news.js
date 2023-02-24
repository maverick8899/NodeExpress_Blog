const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/newsController');

//nó match từ trên xuống nên cấp cha để dưới cùng
router.get('/:slug', newsController.show);
//hiểu là đây là cấp con của new '/' là mặc định đường dẫn
router.get('/', newsController.index);

module.exports = router;
