from flask import Blueprint
from TwitterAPI import TwitterAPI

import os

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
            
    messageReplyJson = '{"event":{"type":"message_create","message_create":{"target":{"recipient_id":"' + userID + '"},"message_data":{"text":"Hello World!"}}}}'
        
    #ignore casing
    if(messageText.lower() == 'hello bot'):
            
        r = twitterAPI.request('direct_messages/events/new', messageReplyJson)
          
    return None      