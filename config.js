const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDERID,
  APP_ID,
  BMI_URL,
  BMR_URL,
  BMI_BMR_KEY,
  BMI_BMR_HOST,
  NUTRITION_KEY,
  NUTRITION_URL,
  NEWS_KEY,
  NEWS_URL
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

const config = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDERID,
    appId: APP_ID
  },
  bmi_url:BMI_URL,
  bmr_url:BMR_URL,
  bmi_bmr_key:BMI_BMR_KEY,
  bmi_bmr_host:BMI_BMR_HOST,
  nutrtion_key: NUTRITION_KEY,
  nutrtion_url: NUTRITION_URL,
  news_url: NEWS_URL,
  news_key: NEWS_KEY
}

module.exports = config;