import json,sys
import pandas as pd
# Takes first name and last name via command  
# line arguments and then display them
input = sys.stdin.read()
x=json.loads(input)
print("Output from Python") 
print(x)
print(json.dumps(x[0]))
print(json.dumps(x[1]))


# print( sys.stdin) 
# print("Last name: " + sys.argv[2])