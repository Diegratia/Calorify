# Calorify-Backend

# Calorify

this is the backend of Calorify, Calorify is the user's calorie tracking application, the user can get optimal daily calories and can track the calorie report from the user

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

Clone the project

```bash
  git clone https://github.com/Diegratia/Calorify.git
```

Go to the project directory

```bash
  cd <YOUR-FOLDER>
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Configuration for Cloud Function
To configure the Calorify-Backend for deployment to Google Cloud Functions, follow these steps:

Install dependencies
```bash
npm install -g firebase-tools
```

go to your project directory
```bash
cd <YOUR-FOLDER>/firebasefunction
```
Initialize your firebase
```bash
firebase init
```
change to your function directory
```bash
cd Functions
```
Install dependencies for your function
```bash
npm install
```
change your directory again
```bash
cd ../
```

Deploy your code to cloud function
```bash
firebase deploy --only functions
```

## Deployment To Google Cloud Platform

To deploy this project you should Clone the project

```bash
  git clone https://github.com/Diegratia/Calorify.git
```

Go to the project directory

```bash
  cd <YOUR-FOLDER>
```

Install All dependencies

```bash
  npm install
```

Deploy in App Engine

```bash
  gcloud app deploy
```
