const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/siteController');

//nó match từ trên xuống nên cấp cha để dưới cùng
router.get('/:slug', siteController.search);
//hiểu là đây là cấp con của new '/' là mặc định đường dẫn
router.get('/', siteController.index);

module.exports = router;
