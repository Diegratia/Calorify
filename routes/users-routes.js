const express = require('express');
const {updateUser, getUser} = require('../controller/users');
const router = express.Router();


router.put('/:id', updateUser);
router.get('/:id', getUser);

module.exports = router;

module.exports = {
  routes : router
}