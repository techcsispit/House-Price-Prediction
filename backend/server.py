from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import json
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict_house_price():
    # Add your code here
    pass

if __name__ == '__main__':
    app.run(debug=True, port=5173)
