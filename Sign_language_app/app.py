from flask import Flask, render_template, request
import image_decoder as decoder
from flask_cors import CORS
import json
from watson_developer_cloud import VisualRecognitionV3

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/react', methods=['POST'])
def react():
    datum = json.loads(request.data.decode())["data"].encode()
    decoder.decode_img(datum)
    visual_recognition = VisualRecognitionV3(
        version='2018-03-19',
        iam_apikey='bVn8qY4UuqICJjUvpH82gf0z-z0zxFbH4JB_We7vEtVk')
    with open('sign_lang_img.jpeg', 'rb') as images_file:
        classes = visual_recognition.classify(
            images_file,
            threshold='0.5',
            classifier_ids='ASLLetters_1012158449',
            owners=["me"]).get_result()
    try:
        letter = classes["images"][0]["classifiers"][0]["classes"][0]["class"]
        accuracy = classes["images"][0]["classifiers"][0]["classes"][0]["score"]
    except:
        return '0'
    # print(json.dumps(classes, indent=2))
    return '{}/{}'.format(letter, accuracy)


if __name__ == '__main__':
    app.run(debug=True)
