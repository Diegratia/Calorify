const admin = require('firebase-admin')
const config =  require('./config');

const serviceAccount = require("./key/serviceAccount.json");

const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports= db;