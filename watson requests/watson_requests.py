import json
from watson_developer_cloud import VisualRecognitionV3

visual_recognition = VisualRecognitionV3(
    version='2018-03-19',
    iam_apikey='AwKRi42ocyQ84GLauS4glfoxTmq_rVfO9N-lMuOJYlRK')

with open('sign_lang_img.jpeg', 'rb') as images_file:
    classes = visual_recognition.classify(
        images_file,
        threshold='0.6',
        classifier_ids='ASLLetters_1012158449',
        owners=["me"]).get_result()
    print(json.dumps(classes, indent=2))
