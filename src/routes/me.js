const express = require('express');
const meController = require('../app/controller/meController');
const router = express.Router();

//nó match từ trên xuống nên cấp cha để dưới cùng
router.get('/trash/musics', meController.recycleBinSongs);
router.get('/stored/musics', meController.storedSongs);

module.exports = router;
