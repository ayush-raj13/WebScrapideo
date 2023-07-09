from flask import Flask
from flask_cors import CORS
from flask import request
import yt_dlp
from flask import jsonify

app = Flask(__name__)
CORS(app)

@app.get("/")
def index():
    return "<h1>Hello!</h1>"

@app.post("/get-info")
def formats():
    url = request.get_json().get("data", "")
    with yt_dlp.YoutubeDL() as ydl:
      r = ydl.extract_info(url, download=False)
      return jsonify(r["formats"])
    
def create_app():
   return app