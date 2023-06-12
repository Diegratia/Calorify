const axios = require('axios');
const firebase = require('../../db');
const config = require('../../config');

const firestore = firebase.firestore();

const getBMRbyId = async (req, res) => {
const user_id = req.params.id; 
  try {
    // dapatkan data user sesuai id
    const user = await firestore.collection('users').doc(user_id).get();
    const bmr = user.data();

    const {age, gender, height, weight, activitylevel} = bmr;
    const options = {
      method: 'GET',
      url: config.bmr_url,
      params: {
        age,
        gender,
        height,
        weight,
        activitylevel
      },
      headers: {
        'X-RapidAPI-Key': config.bmi_bmr_key,
        'X-RapidAPI-Host': config.bmi_bmr_host
      }
    };

    const bmrUser = await axios.request(options);

    // simpan bmr, jika error tambahkan function set {if else}
    await firestore.collection('users').doc(user_id).update({
      bmr: bmrUser.data
    });

    res.send(bmrUser.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Internal Server Error!",
      error: error.message
      });
  }
};

module.exports = {getBMRbyId};