const admin = require('firebase-admin')
const config =  require('./config');

const serviceAccount = require("./key/serviceAccount-firebase-key.json");

const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports= db;