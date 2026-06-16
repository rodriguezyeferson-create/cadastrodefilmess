from flask import flask 
from flask_cors import CORS

app = flask(_name_)
CORS(app)

@pp.route("/")
def home():
