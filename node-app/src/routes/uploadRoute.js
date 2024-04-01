const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const uploadController = require("../controller/uploadController");

router.post("/upload", upload.single("image"), uploadController.uploadImage);

module.exports = router;
