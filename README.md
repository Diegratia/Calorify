# Calorify-Machine-Learning-Model


this is the machine learning model of Calorify(ongoing)

```
$ gcloud init
$ gcloud services enable run.googleapis.com

build and push image
gcloud builds submit --tag gcr.io/<Your-Project-ID>/machine-learning-model

deploy
gcloud run deploy machine-learning-model \
--image=gcr.io/<YOUR-PROJECT-ID>/machine-learning-model
--allow-unauthenticated \
--memory=1Gi \
--region=asia-southeast2 \
--<YOUR-PROJECT-ID>
```
