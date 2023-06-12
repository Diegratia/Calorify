const {sendPasswordResetEmail, getAuth} = require('firebase/auth');
const {initializeApp} = require('firebase/app');
const {getFirestore, collection, doc, setDoc} = require('firebase/firestore');
const config = require('../../config');

const initialize = initializeApp(config.firebaseConfig);
const auth = getAuth(initialize);
const db = getFirestore(initialize);

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    // Send password reset email
    await sendPasswordResetEmail(auth, email);
    res.status(200).json({
      code: 200,
      status: 'OK',
      message: 'Password reset email sent' 
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "Internal Server Error!",
      error: error.message
      });
  }
};

module.exports = { forgotPassword };