const express = require('express');
const {register, registerData, checkEmail} = require('../controller/auth/registerController');
const {login} = require('../controller/auth/loginController');
const {logout} = require('../controller/auth/logoutController');
const {forgotPassword} = require('../controller/auth/forgotController');
const router = express.Router();

// Registration route
router.post('/', register);
router.post('/', registerData);
router.post('/', checkEmail);

// Login route
router.post('/', login);

// Logout route
router.post('/', logout);

router.post('/', forgotPassword);

module.exports = router;

module.exports = {
  registerData: registerData,
  checkEmail : checkEmail,
  registerMiddleware : register,
  loginMiddleware : login,
  logoutMiddleware : logout,
  forgotPassword: forgotPassword,
  routes : router
}