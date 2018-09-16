import json
from watson_developer_cloud import VisualRecognitionV3

visual_recognition = VisualRecognitionV3(
	version='2018-03-19',
	iam_apikey='bVn8qY4UuqICJjUvpH82gf0z-z0zxFbH4JB_We7vEtVk')

with open('{***IMAGE GOES HERE***}', 'rb') as images_file:
    classes = visual_recognition.classify(
		images_file,
		threshold='0.6',
		classifier_ids='ASLLetters_1012158449',
		owners=["me"]).get_result()
    print(json.dumps(classes, indent=2))