import base64


def decode_img(img_data):
    with open("sign_lang_img.jpeg", "wb") as fh:
        fh.write(base64.decodebytes(img_data))
