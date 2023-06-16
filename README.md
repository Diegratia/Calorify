# Calorify-Machine-Learning-Model
this is the machine learning model api of Calorify, using flask and .h5 model, Download our model and put in same folder with app.py file
[model](https://storage.googleapis.com/calorify-model-bucket/model.h5)

## API Reference
#### Post food image

```
  POST /predict
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `image`   | `file`   | **Required**. file image of your food |


## clone this branch
```
git clone -b Machine-Learning-Model https://github.com/Diegratia/Calorify.git Machine-Learning-Model
cd Machine-Learning-Model
```
## Install Dependencies
```
pip install -r requirement.txt
```

## Initialize and enable API
```
$ gcloud init
$ gcloud services enable run.googleapis.com
```
## build and push image
```
gcloud builds submit --tag gcr.io/<Your-Project-ID>/machine-learning-model
```
## Deploy your model in cloud run
```
gcloud run deploy machine-learning-model \
--image=gcr.io/<YOUR-PROJECT-ID>/machine-learning-model
--allow-unauthenticated \
--memory=2Gi \
--max-instances=2 \
--cpu=2
--region=asia-southeast2 \
--<YOUR-PROJECT-ID>
```
