# Calorify-Machine-Learning-Model
this is the machine learning model of Calorify

##clone this branch
```
git clone -b Machine-Learning-Model https://github.com/Diegratia/Calorify.git Machine-Learning-Model
cd Machine-Learning-Model
```
## Install Dependencies
```
pip install -r requirement.txt
```

##Initialize and enable API
```
$ gcloud init
$ gcloud services enable run.googleapis.com
```
##build and push image
~
gcloud builds submit --tag gcr.io/<Your-Project-ID>/machine-learning-model
~
##Deploy your model in cloud run
```
gcloud run deploy machine-learning-model \
--image=gcr.io/<YOUR-PROJECT-ID>/machine-learning-model
--allow-unauthenticated \
--memory=2Gi \
--region=asia-southeast2 \
--<YOUR-PROJECT-ID>
```
