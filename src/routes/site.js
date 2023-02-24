const express = require("express");
const router = express.Router();
const siteController = require("../app/controller/siteController");

//nó match từ trên xuống nên cấp cha để dưới cùng
router.use("/:slug", siteController.search);
//hiểu là đây là cấp con của new '/' là mặc định đường dẫn
router.use("/", siteController.index);

module.exports = router;
