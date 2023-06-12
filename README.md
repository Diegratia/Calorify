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
##
## Run Locally

Clone the project

```bash
  git clone https://github.com/Diegratia/Calorify.git
```

Go to the project directory

```bash
  cd Calorify
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
##
## Configuration for Cloud Function

```bash
npm install -g firebase-tools
```

```bash
cd YOURFOLDER/firebase-function
```

```bash
firebase init
```

```bash
cd YOURFOLDER/firebase-function/Function
```

```bash
npm install
```
##
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
