const express = require('express');
const userController = require('../app/controller/userController');
const router = express.Router();

router.get('/paginate', userController.paginate);
router.get('/', userController.index);

module.exports = router;
