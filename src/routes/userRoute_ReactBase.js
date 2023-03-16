const express = require('express');
const userController = require('../app/controller/userController');
const router = express.Router();

router.delete('/:id/delete', userController.delete);
router.put('/:id/update', userController.update);
router.get('/paginate', userController.paginate);
router.post('/store', userController.store);
router.get('/', userController.index);

module.exports = router;
