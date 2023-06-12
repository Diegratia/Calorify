const express = require('express');
const router = express.Router();
const {getAuth, signOut} = require('firebase/auth');
const {initializeApp} = require('firebase/app');
const config = require('../../config');

const app = initializeApp(config.firebaseConfig);

const logout =  (req, res) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const userId = user.uid; 
    signOut(auth)
      .then(() => {
        res.status(200).json({
          code:200,
          status: 'OK',
          message:`User with ID ${userId} has logout` 
        })
        console.log(`User with ID ${userId} has logout`);
      })
      .catch((error) => {
        res.status(500).json({
          code:500,
          status: "Internal Server Error!",
          error: error.message
        })
        console.error('Error logging out:', error);
      });
  } else {
    res.status(400).json({
      code: 400,
      status: 'Bad Request',
      error: 'User already loggout'
    });
    console.log('User already loggout');
  }
};


module.exports = {
  logout
};