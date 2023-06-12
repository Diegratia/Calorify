const {getAuth, onAuthStateChanged} = require('firebase/auth');
const auth = getAuth();

const CheckAuth = (req, res, next) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ 
        code:401,
        status:'Unauthorized',
        error: 'Access is Denied!'
       });
    }
  });
};
module.exports = {CheckAuth};
