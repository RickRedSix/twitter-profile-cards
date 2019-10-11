from flask import Blueprint, Response
from TwitterAPI import TwitterAPI

import os, json

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