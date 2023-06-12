const {getAuth} = require('firebase/auth');
const {initializeApp} = require('firebase/app');
const {getFirestore, collection, doc, setDoc, updateDoc, getDoc} = require('firebase/firestore');
const config = require('../config');

const initialize = initializeApp(config.firebaseConfig);
const auth = getAuth(initialize);
const firestore = getFirestore(initialize);

const updateUser = async (req, res) => {
  try {
     // cek dgn array find
    const user_id = [req.body.user_id, req.user.uid, req.params.id].find(value => value != null);
    const { height, weight, activitylevel } = req.body;
    // Update user data in the users collection
    const user = doc(firestore, 'users', user_id);
    await updateDoc(user, {
      height,
      weight,
      activitylevel
    });

    res.status(200).json({ 
      code:200,
      status:"OK",
      message: 'User updated successfully' 
    });
    console.log('User updated:', user_id);
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "Internal Server Error!",
       error: error.message 
      });
  }
};

const getUser = async (req, res) => {
  try {
    // cek dgn array find
    const user_id = [req.body.user_id, req.user.uid, req.params.id].find(value => value != null);
    const user = doc(firestore, 'users', user_id);
    const getUser = await getDoc(user);

    if (getUser.exists()) {
      const userData = getUser.data();

      const UserDatas = {
        user_id: req.user.uid,
        email: userData.email,
        username: userData.username,
        nation: userData.nation,
        age: userData.age,
        gender: userData.gender,
        height: userData.height,
        weight: userData.weight,
        activitylevel: userData.activitylevel,
        bmi: userData.bmi,
        bmr: userData.bmr
      };

      res.status(200).json(UserDatas);
    } else {
      res.status(404).json({ 
        code: 404,
        status: "Not Found!",
        error: 'User not found'
       });
    }
  } catch (error) {
    res.status(500).json({
       code: 500,
       status: "Internal Server Error!",
       error: error.message 
      });
  }
};


module.exports ={updateUser, getUser};