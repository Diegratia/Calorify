const express = require('express');
const router = express.Router();
const {getAuth, signInWithEmailAndPassword} = require('firebase/auth');
const {initializeApp} = require("firebase/app");
const config = require('../../config');

const initialize = initializeApp(config.firebaseConfig);
const firebaseAuth = getAuth(initialize);

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
    res.status(200).json({
      code: 200,
      status: "OK",
      message: 'Login successful',
      user_id: user.uid
    });

    console.log('User login:', user.uid);
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "Internal Server Error!",
      error: error.message
    });
  }
};

module.exports = {login};