const {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, fetchSignInMethodsForEmail} = require('firebase/auth');
const {initializeApp } = require('firebase/app');
const {getFirestore, collection, doc, setDoc} = require('firebase/firestore');
const config = require('../../config');

const initialize = initializeApp(config.firebaseConfig);
const auth = getAuth(initialize);
const firestore = getFirestore(initialize);

const register = async(req, res) => {
  try{
    const {email, password, confirmPassword} = req.body;
    if(!email || !password){
      res.status(400).json({
        code: 400,
        status: "Bad Request",
        error: "Email and Password are Mandatory!"
      });
      return;
    }
    if(password.length < 8){
      res.status(400).json({
        code:400,
        status: "Bad Request",
        error: "Password should be up to 8 Charater!"
      });
      return;
    }
    if (password !== confirmPassword) {
      res.status(400).json({
        code: 400,
        status: "Bad Request",
        error:'Passwords not match!'
      });
      return;
    }

    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    res.status(200).json({
      code:200,
      status: "OK",
      Message: `User with ID ${user.uid} has been registered!`
    });
    console.log('User registered:', user.uid);

  }catch(error){
    res.status(500).json({
      code: 500,
      status: "Internal Server Error!",
      error: error.message
  });
}
}

const registerData = async (req, res) => {
  try {
    const { username, nation, birthday, age, gender, height, weight, activitylevel } = req.body;
    const user_id = req.user.uid;
    const email = req.user.email;
    if (!birthday || !gender || !height || !weight || !activitylevel) {
      res.status(400).json({ 
        code: 400,
        status: "Bad Request",
        error: 'All value are mandatory!' 
      });
      return;
    }

 
    const users = doc(firestore, 'users', user_id);
    await setDoc(users, {
      email,
      username,
      nation,
      birthday,
      age,
      gender,
      height,
      weight,
      activitylevel,
      created_at: new Date()
    });

    res.status(200).json({ 
      code: 200,
      status: "OK",
      message: `User data for ID ${user_id} has been updated!` 
    });
    console.log('User data updated:', user_id);

  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      error: error.message
    });
  }
};

const checkEmail = async (req, res) => {
  try {
    const {email} = req.body;
    async function checkIfEmailExists(email) {
      try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        return methods.length > 0;
      } catch (error) {
        throw new Error('An error occurred while checking if the email exists.');
      }
    }  
    const emailExists = await checkIfEmailExists(email);

if(emailExists){
  res.status(409).json({
    code: 409,
    status: 'Conflict!',
    exists: emailExists,
    message: `${email} already registered, please use another email!`
  });
}else{
  res.status(200).json({
    code: 200,
    status: 'OK!',
    exists: emailExists,
    message: `user can use ${email} !`
  });
}

  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      error: error.message,
    });
  }
};
module.exports = { register, registerData, checkEmail};