const express = require('express');
const {uploadImage, getImage} = require('../controller/imageUp/imageUpload');
const router = express.Router();
const multer = require('multer');

const uploadFile = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 4 * 1024 * 1024, 
  },
});

router.post('/upload/:id', uploadFile.single('profilePic'), uploadImage);
router.get('/:id', getImage);

module.exports = router;
