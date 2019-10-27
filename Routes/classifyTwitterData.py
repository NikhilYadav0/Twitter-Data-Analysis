
import re
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from textblob import Word
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.metrics import accuracy_score, cohen_kappa_score, confusion_matrix
from sklearn.externals import joblib
import sys


import nltk
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.stem.porter import PorterStemmer


def data_cleaning(text):
    text=str(text)
    words  = word_tokenize(text)
    words = [word for word in words if word.isalpha()]
    stop_words = set(stopwords.words('english'))
    words = [w for w in words if not w in stop_words]
    lmtzr = WordNetLemmatizer()
    words = [lmtzr.lemmatize(word) for word in words]
    porter = PorterStemmer()
    words = [porter.stem(word) for word in words]
    return (" ".join(str(x) for x in words))

def predict(article):
    news_content_clean= [] 
    news_content_clean.append(data_cleaning(article))
    news_content_clean[0]
    tf_load_vec = joblib.load("C:/Users/nikhi/Desktop/minor project/trial/public/tf_vectorizer.pkl")
    crf = joblib.load("C:/Users/nikhi/Desktop/minor project/trial/public/news_classification_system.pkl")
    extract = tf_load_vec.transform(news_content_clean)
    predicted = crf.predict(extract)
    return predicted

import json,sys
import pandas as pd

input = sys.stdin.read()
x=json.loads(input)
print(json.dumps(x))
ans=predict(x)
print(ans)