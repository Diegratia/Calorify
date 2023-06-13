# Calorify-Backend

- [Calorify-Backend](#calorify-backend)
  - [Calorify](#calorify)
  - [Documentation](#documentation)
  - [Backend and Cloud Architecture](#backend-and-cloud-architecture)
  - [Tech Stack](#tech-stack)
  - [Dependencies](#dependencies)
  - [Code Configuration](#code-configuration)
  - [Service Account Configuration](#Service-Account-Configuration)
  - [Local Development](#local-development)
  - [Configuration for Cloud Function](#configuration-for-cloud-function)
  - [Deployment To Google Cloud Platform](#deployment-to-google-cloud-platform)

# Calorify

Calorify-Backend is the backend component of Calorify, a calorie tracking application that allows users to get optimal daily calorie recommendations and track users calorie intake.

## Documentation

[Calorify Documentation](https://documenter.getpostman.com/view/27637501/2s93sabDVB)

## Backend and Cloud Architecture

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

## Code Configuration

To run this project, you will need to add the following environment variables to your `.env` file:

### Express Server Configuration
```
- `PORT=YOUR-PORT`
- `HOST=YOUR-HOST`
- `HOST_URL=http://YOUR-HOST:YOUR-PORT`
```
### Firebase Database Configuration

To obtain the required configuration, create a Firebase project and retrieve the following details:
```
API_KEY
AUTH_DOMAIN
PROJECT_ID
STORAGE_BUCKET
MESSAGING_SENDERID
APP_ID
```

### BMI & BMR Configuration

To obtain the required configuration, sign up for the following public API: [BMI & BMR API](https://rapidapi.com/malaaddincelik/api/fitness-calculator)
```
- `BMI_URL`: Your public BMI URL
- `BMR_URL`: Your public BMR URL
- `BMI_BMR_KEY`: BMI & BMR key
- `BMI_BMR_HOST`: BMI & BMR host
```
### Nutrition Configuration

To obtain the required configuration, sign up for the following Nutrition API: [Nutrition API](https://api-ninjas.com/api/nutrition)
```
- `NUTRITION_KEY`: Your Nutrition API KEY
- `NUTRITION_URL`: Your Nutrition API URL
```
## Service Account Configuration
[read this](https://github.com/Diegratia/Calorify/blob/main/your-key-folder/README.md)

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

