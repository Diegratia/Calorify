const {Storage} = require('@google-cloud/storage');
const serviceAccountKey = require('../../key/service-account-image-key.json'); 

const storage = new Storage({
  credentials: serviceAccountKey,
});

const uploadImage = async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const bucketCalorify = storage.bucket("bucket-calorify");
    const imageFile = bucketCalorify.file(`profilePic/${user_id}.jpg`);
    await imageFile.save(req.file.buffer, {
      contentType: req.file.mimetype,
      resumable: false
    });

    res.status(200).json({
      code: 200,
      status: 'OK',
      message: 'Upload Success',
    });
  } catch (error) {
    next(error);
  }
};

const getImage = async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const bucketCalorify = storage.bucket("bucket-calorify");
    const imageFile = bucketCalorify.file(`profilePic/${user_id}.jpg`);
    res.setHeader('Content-Type', 'image/jpeg');
    imageFile.createReadStream().pipe(res);
  } catch (error) {
    next(error);
  }
};

module.exports = {uploadImage, getImage};
