const express = require('express');
const {CheckAuth} = require('../controller/middleware/authlogincheck');
const router = express.Router();

router.post('/', CheckAuth);


module.exports = router;

module.exports = {
  checkAuth : CheckAuth,
  routes : router
}



