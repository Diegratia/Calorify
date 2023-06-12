const axios = require('axios');
const firebase = require('../../db');
const config = require('../../config');
const moment =  require('moment');


const firestore = firebase.firestore();

const postNutrition = async (req, res) => {
  try {
    const query = req.body.query;
    const apiKey = config.nutrtion_key

    const response = await axios.get(config.nutrtion_url, {
      params: {
        query: query
      },
      headers: {
        'X-Api-Key': apiKey
      }
    });

    const nutritionData = response.data;
    console.log('Nutrition Data:', nutritionData);

    const totalCalories = nutritionData[0].calories;
    console.log('Total Calories:', totalCalories);

    const user_id = req.user.uid;

    const calorieIntake = firestore.collection('calorieIntake').doc(user_id);
    const getCalorieIntake = await calorieIntake.get();
    if(!getCalorieIntake.exists){
      await firestore.collection('calorieIntake').doc(user_id).set({
        totalCalories: 0,
        date: new Date()
      });
    }else{
      const currentTotalCalories = getCalorieIntake.data().totalCalories;
      const newTotalCalories = currentTotalCalories + totalCalories;
  
      //up total kalori
        await firestore.collection('calorieIntake').doc(user_id).update({
          totalCalories: newTotalCalories,
          date: new Date()
        });
    }
      //subcollection 
    const foodSub = calorieIntake.collection('food').doc();
    await foodSub.set({
      name: nutritionData[0].name,
      calories: nutritionData[0].calories,
      servingSize: nutritionData[0].serving_size_g,
      date: new Date()
    });

    res.status(200).json({ 
      code: 200,
      status: 'OK',
      message: 'Food stored successfully'
     });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      code: 500,
      status: "Internal Server Error!",
      error: error.message
       });
  }
};



const getNutrition = async (req, res) => {
  try {
    const user_id = req.user.uid;

    const calorieIntake = firestore.collection('calorieIntake').doc(user_id);
    const foodSub = calorieIntake.collection('food');

    const getFoodSub = await foodSub.get();
    const foodFields = [];

    getFoodSub.forEach((food) => {
      const foodData = {
        food_id: food.id,
        name: food.data().name,
        calories: food.data().calories,
        servingSize: food.data().servingSize,
        date: moment(food.data().date.toDate()).format('DD-MM-YYYY')
        
      };
      foodFields.push(foodData);
    });

    res.status(200).json({
      foodFields,
        code: 200,
        status: 'OK'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      error: error.message
       });
  }
};

const getTotalCalories = async (req, res) => {
  try {
    const user_id = req.user.uid;
    const calorieIntake = firestore.collection('calorieIntake').doc(user_id);

    const getTotalCal = await calorieIntake.get();
    
    const totalCaloriesData = {
      calories_id: getTotalCal.id,
      total_calories: getTotalCal.data().totalCalories,
      date: moment(getTotalCal.data().date.toDate()).format('DD-MM-YYYY')
    };

    res.status(200).json({
      totalCaloriesData,
        code: 200,
        status: 'OK'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      code: 500,
      status: 'Internal Server Error',
      error: error.message
    });
  }
};


const deleteNutrition = async (req, res) => {
  try {
    const user_id = req.user.uid;
    const food_id = req.params.id;

    const calorieIntake = firestore.collection('calorieIntake').doc(user_id);
    const foodSub = calorieIntake.collection('food').doc(food_id);
    const getFoodSub = await foodSub.get();

    const getCalorieFormDeleteFood = getFoodSub.data().calories;

    const getCalorieIntake = await calorieIntake.get();
    const TotalCalories = getCalorieIntake.data().totalCalories;
    let getTotalCal = TotalCalories -  getCalorieFormDeleteFood;
    //minus fix
    if(getTotalCal < 0){
      getTotalCal = 0;
    }
  
    await calorieIntake.update({
      totalCalories: getTotalCal
    });
    await foodSub.delete();
    console.log('Food has been deleted:', food_id);

    res.status(200).json({ 
      code: 200,
      status: 'OK',
      message: 'Food has been deleted'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      error: error.message
    });
  }
};

module.exports = {postNutrition, getNutrition, deleteNutrition, getTotalCalories};