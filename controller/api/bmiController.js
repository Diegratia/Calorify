const axios = require('axios');
const firebase = require('../../db');
const config = require('../../config');
const firestore = firebase.firestore();


const getBMIbyId = async (req, res) => {
const user_id = req.params.id; 
  try {
    // dapatkan data user
    const user = await firestore.collection('users').doc(user_id).get();
    const bmi = user.data();

    // catch beberapa field tertentu
    const {age, weight, height} = bmi;

    const options = {
      method: 'GET',
      url: config.bmi_url,
      params: {
        age,
        weight,
        height
      },
      headers: {
        'X-RapidAPI-Key': config.bmi_bmr_key,
        'X-RapidAPI-Host': config.bmi_bmr_host
      }
    };

    const bmiUser = await axios.request(options);
    await firestore.collection('users').doc(user_id).update({
      bmi: bmiUser.data
    });
    res.send(bmiUser.data); 
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Internal Server Error!",
      error: error.message
       });
  }
};

module.exports = { getBMIbyId };