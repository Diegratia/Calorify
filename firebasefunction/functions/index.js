const firebaseFunc = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const firestoreAdmin = admin.firestore();
const Func = firebaseFunc.region('asia-southeast2')
const resetTotalCalories = Func.pubsub.schedule("0 0 * * *")
    .timeZone("Asia/Jakarta")
    .onRun(async () => {
      try {
        const getUsers = await firestoreAdmin.collection("users").get();
        getUsers.forEach(async (user) => {
          const user_id = user.id;
          const totalCalories = firestoreAdmin.collection("calorieIntake").doc(user_id);
          const getTotalCalories = await totalCalories.get();

          if (getTotalCalories.exists) {
            await totalCalories.update({
              totalCalories: 0,
              date: new Date(),
            });
          } else {
            await totalCalories.set({
              totalCalories: 0,
              date: new Date(),
            });
          }
        });
        console.log("Total calories reset completed");
        return null;
      } catch (error) {
        console.error(error);
        return null;
      }
    });

module.exports = {resetTotalCalories};
