# Calorify-Backend

# Calorify

Calorify-Backend is the backend component of Calorify, a calorie tracking application that allows users to get optimal daily calorie recommendations and track their calorie intake.

## Documentation

[Calorify Documentation](link)

##Backend and Cloud Architecture

![Calorify Cloud Architecture - Page 1 (3)](https://github.com/Diegratia/Calorify/assets/67423473/94913da1-d35a-4c11-903a-019a6a46a2f7)


## Tech Stack

- Express.js
- Firebase
- Google Cloud Platform (GCP) services:
  - Cloud Functions
  - App Engine
  - Google Scheduler
  - Pub/Sub
  - Cloud Storage/Buckets

## Dependencies

- axios: 1.4.0
- body-parser: 1.20.2
- cors: 2.8.5
- dotenv: 16.0.3
- express: 4.18.2
- firebase: 9.22.1
- firebase-admin: 11.8.0
- moment: 2.29.4
- multer: 1.4.5-lts.1
- @google-cloud/storage: 6.11.0
- nodemon: 2.0.22


## Local Development
Follow these steps to run the Calorify-Backend locally:

Clone the project, navigate to the project directory, and install dependencies

```bash
git clone https://github.com/Diegratia/Calorify.git
cd Calorify
npm install
```
Start the server

```bash
  npm run start
```

## Configuration for Cloud Function
To configure the Calorify-Backend for deployment to Google Cloud Functions, follow these steps

Install the Firebase CLI:
```bash
npm install -g firebase-tools
```

Navigate to the project directory and initialize Firebase
```bash
cd Calorify/firebasefunction
firebase init
```
Change to the Functions directory, install dependencies, and go back to the project directory
```bash
cd Functions
npm install
cd ../

```
Deploy the code to Cloud Functions
```bash
firebase deploy --only functions
```

Deploy your code to cloud function
```bash
firebase deploy --only functions
```

## Deployment To Google Cloud Platform

Clone the project, navigate to the project directory, and install dependencies

```bash
git clone https://github.com/Diegratia/Calorify.git
cd Calorify
npm install
```

Deploy to App Engine

```bash
gcloud app deploy
```

