from flask import Flask, jsonify, request
from waitress import serve
import numpy as np
import tensorflow as tf
import PIL
import PIL.Image


INPUT_IMAGE_SHAPE = [224, 224]
model_path = '<Your Model>'
class_names = ['fried_rice', 'omelette', 'tiramisu', 'spring_rolls', 'donuts', 'chicken_wings',
               'chocolate_cake', 'churros', 'ice_cream', 'waffles', 'takoyaki', 'onion_rings',
               'mussels', 'macarons', 'cup_cakes', 'hamburger', 'edamame']

app = Flask(__name__)

@app.route('/', methods=['GET'])
def serverCheck():
    return 'Your model server running successfully!'

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        raw_img = request.files['image']
        img = PIL.Image.open(raw_img)
        img = tf.keras.utils.img_to_array(img)
        img = img[..., :3]
        img_rescaled = tf.image.resize(img, [224, 224])
        img_rescaled = tf.expand_dims(img_rescaled, 0)
        img_rescaled =np.vstack([img_rescaled])

        model = tf.keras.models.load_model(model_path, compile=False)
        model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

        prediction = model.predict(img_rescaled)
        prediction = np.argmax(prediction[0])
        result = class_names[prediction]
        result = result.split("_")
        result = " ".join(result)

        modelRes = jsonify({"result":result})
        modelRes.headers['Content-Type']='application/json; charset=utf-8'
        return modelRes

if __name__ == '__main__':
    print("Your model server running successfully!")
    serve(app, host='<yourhost>', port='<yourport>')