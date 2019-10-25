from sklearn.externals import joblib

def predict(article):
    crf = joblib.load("C:/Users/nikhi/Desktop/minor project/trial/public/news_classification_system.pkl")
    predicted = crf.predict(article)
    return predicted


import json,sys
import pandas as pd

input = sys.stdin.read()
x=json.loads(input)
# print("Output from Python") 
# print(x)
print(json.dumps(predict(x[0])))

# print(json.dumps(x[0]))


# print( sys.stdin) 
# print("Last name: " + sys.argv[2])