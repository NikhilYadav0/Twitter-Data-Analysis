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
from pathlib import Path
# path = r'dataset.csv'

# reading file to pandas dataframe
# print(sys.argv)

# f = Path("")
df = pd.read_csv(Path('C:/Users/nikhi/Desktop/minor project/trial/public/dataset.csv'), encoding="ISO-8859-1")

x = df['news'].tolist()
y = df['type'].tolist()

def data_cleaning(text):
    
    # split into sentences
    words  = word_tokenize(text)
    words = [word for word in words if word.isalpha()]
    
    # remove stop words in sentence
    stop_words = set(stopwords.words('english'))
    words = [w for w in words if not w in stop_words]
    #print(words[:100])
    
	#please it comment if you don't want to use Lemmatizer
    # lemmatizing of words 
    lmtzr = WordNetLemmatizer()
    words = [lmtzr.lemmatize(word) for word in words]
    # print(lemmt[:100])

    # stemming of words
    porter = PorterStemmer()
    words = [porter.stem(word) for word in words]
    return (" ".join(str(x) for x in words))

import nltk
nltk.download('punkt')
nltk.download('stopwords')
for index, string in enumerate(x):
    x[index] = data_cleaning(string)

    tf_vec = TfidfVectorizer(stop_words='english', min_df=2)
X = tf_vec.fit_transform(x)
Y = np.array(y)

print("No of features",X.shape[1])

X_train, X_test, Y_train, Y_test = train_test_split(X,Y,test_size=0.20, random_state=42)
model = RandomForestClassifier(n_estimators=300, max_depth=150,n_jobs=1)

model.fit(X_train, Y_train)

y_pred = model.predict(X_test)

con_mat = confusion_matrix(Y_test,y_pred)
kappa_coef = cohen_kappa_score(Y_test,y_pred)

accu = accuracy_score(Y_test,y_pred)

print("Confusion Matrix:\n", con_mat)
print( "\nKappa: ",kappa_coef)
print("\nAccuracy: ",accu)

# Saving model to local for future use 
joblib.dump(model, 'news_classification_system.pkl')

joblib.dump(tf_vec, 'tf_vectorizer.pkl')

news_content = """
Since yesterday, many of you have been asking - what is it that I was carrying in my hands when I went plogging at a beach in Mamallapuram. 

It is an acupressure roller that I often use. I have found it to be very helpful.
"""

news_content_clean= [] 
news_content_clean.append(data_cleaning(news_content))
news_content_clean[0]

tf_load_vec = joblib.load('tf_vectorizer.pkl')
model = joblib.load('news_classification_system.pkl')

extract = tf_load_vec.transform(news_content_clean)

print(model.predict(extract))