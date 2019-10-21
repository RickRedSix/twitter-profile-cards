from flask import Blueprint, Response
from TwitterAPI import TwitterAPI

import os, json, requests

CONSUMER_KEY = os.environ.get('CONSUMER_KEY', None)
CONSUMER_SECRET = os.environ.get('CONSUMER_SECRET', None)

ACCESS_TOKEN = os.environ.get('ACCESS_TOKEN', None)
ACCESS_TOKEN_SECRET = os.environ.get('ACCESS_TOKEN_SECRET', None)

twitter = Blueprint('twitter', __name__)

def initApiObject():
    
    #user authentication
    api = TwitterAPI(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)    
    
    return api	
    			
@twitter.route("/generate/<handle>")
def getUserDetails(handle):    

    twitterAPI = initApiObject()
            
    r = twitterAPI.request('users/show', {'screen_name': handle})
          
    return Response(json.dumps(r.json()),  mimetype='application/json')     
    
# @twitter.route("/generate-qr/<handle>")
# def generateQRCode(handle):    
#     
#     url = "https://qrcode-monkey.p.rapidapi.com/qr/custom"
#     
#     querystring = {"size":"800","file":"png","config":"{\"eye\": \"frame1\", \"eyeball\": \"ball14\", \"body\":\"circle\"}","data":"https://www.twitter.com/" + handle}
#     
#     headers = {
#         'x-rapidapi-host': "qrcode-monkey.p.rapidapi.com",
#         'x-rapidapi-key': "a3b97742aemsh6312ae0ac122686p12e9f9jsnf0f49ffde93b"
#         }
#     
#     response = requests.request("GET", url, headers=headers, params=querystring)
#           
#     print(response.text)       
    
    
    