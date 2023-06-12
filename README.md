# Calorify-Backend

# Calorify

this is the backend of Calorify, Calorify is the user's calorie tracking application, the user can get optimal daily calories and can track the calorie report from the user

## Documentation

[Calorify Documentation](link)

## Tech Stack

- Express.js
- Firebase
- Cloud/Firebase function - Google Cloud Platform (GCP)
- App Engine - Google Cloud Platform (GCP)
- Google Scheduler - Google Cloud Platform (GCP)
- Pub/Sub - Google Cloud Platform (GCP)
- Cloud Storage/Buckets - Google Cloud Platform (GCP)

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


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#express server config

PORT=YOUR PORT
HOST= YOUR HOST
HOST_URL=http://YOURHOST:YOURPORT

#firebase database config
*create firebase project to get your config

API_KEY= 
AUTH_DOMAIN= 
PROJECT_ID= 
STORAGE_BUCKET= 
MESSAGING_SENDERID= 
APP_ID= 


#bmr & bbmi config

BMI_URL= your public bmi url 
BMR_URL= your public bmr url
BMI_BMR_KEY= bmi & bmr key
BMI_BMR_HOST= bmi & bmr host

NUTRITION_KEY= Your Nutrition API KEY
NUTRITION_URL= Your Nutrition API URL



## Run Locally

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
cd <YOUR-FOLDER>/firebasefunction/Functions
```
Install dependencies for your function
```bash
npm install
```
change your directory again
```bash
cd <YOUR-FOLDER>/firebasefunction
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
  cd Calorify
```

Install All dependencies

```bash
  npm install
```

Deploy in App Engine

```bash
  gcloud app deploy
```
