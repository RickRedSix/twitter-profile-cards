function init() {    
    
    let generateButton = document.querySelector('#generate-button');
    
    generateButton.addEventListener("click", function () {  
        
        let handleInput = document.querySelector('#handle-input').value;        
        
        getProfileDetails(handleInput);
        
    });
    
    function getProfileDetails(handle) {
        
/*
        fetch('/generate/' + handle, {
                method: 'get'
            })
            .then(response => response.json())    
            .then(jsonData => constructCardHTML(jsonData))
            .catch(err => {
                //error block
            });
*/
            
        var data = {
  "id": 214131351,
  "id_str": "214131351",
  "name": "Rick Smith",
  "screen_name": "RickRedSix",
  "location": "London",
  "profile_location": null,
  "description": "I make things, with computers, sometimes... @TwitterUK",
  "url": "https://t.co/VKwPJJH37J",
  "entities": {
    "url": {
      "urls": [
        {
          "url": "https://t.co/VKwPJJH37J",
          "expanded_url": "http://ricksmith.co.uk",
          "display_url": "ricksmith.co.uk",
          "indices": [
            0,
            23
          ]
        }
      ]
    },
    "description": {
      "urls": []
    }
  },
  "protected": false,
  "followers_count": 489,
  "friends_count": 483,
  "listed_count": 10,
  "created_at": "Wed Nov 10 17:00:53 +0000 2010",
  "favourites_count": 5486,
  "utc_offset": null,
  "time_zone": null,
  "geo_enabled": true,
  "verified": false,
  "statuses_count": 2079,
  "lang": null,
  "status": {
    "created_at": "Thu Oct 17 09:06:10 +0000 2019",
    "id": 1184757481706270700,
    "id_str": "1184757481706270720",
    "text": "$199? That's a yes from me!\n\nThis is essentially just going to be an Advance Wars machine that lives in my bag.\n\nhttps://t.co/HiA2t6vx0Z",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/HiA2t6vx0Z",
          "expanded_url": "https://www.analogue.co/pocket/",
          "display_url": "analogue.co/pocket/",
          "indices": [
            113,
            136
          ]
        }
      ]
    },
    "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  "contributors_enabled": false,
  "is_translator": false,
  "is_translation_enabled": false,
  "profile_background_color": "131516",
  "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
  "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
  "profile_background_tile": true,
  "profile_image_url": "http://pbs.twimg.com/profile_images/1088134167685148672/IvgwIbrg_normal.jpg",
  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1088134167685148672/IvgwIbrg_normal.jpg",
  "profile_banner_url": "https://pbs.twimg.com/profile_banners/214131351/1426254133",
  "profile_link_color": "009999",
  "profile_sidebar_border_color": "FFFFFF",
  "profile_sidebar_fill_color": "EFEFEF",
  "profile_text_color": "333333",
  "profile_use_background_image": true,
  "has_extended_profile": true,
  "default_profile": false,
  "default_profile_image": false,
  "following": false,
  "follow_request_sent": false,
  "notifications": false,
  "translator_type": "regular",
  "suspended": false,
  "needs_phone_verification": false
}

    constructCardHTML(data);
    
    setTimeout(function () {
        HTMLToCanvas();      
          
        }, 5000);

            
    }
    
    function constructCardHTML(data) {
        let cardContainer = document.querySelector('#twitter-card-conatiner');
        let rearCardContainer = document.querySelector('#twitter-card-conatiner-rear');        
        let nameContainer = document.querySelector('#twitter-profile-name');
        let handleContainer = document.querySelector('#twitter-profile-handle');
        let rearHandleContainer = document.querySelector('#twitter-profile-handle-rear');                
        let bioContainer = document.querySelector('#twitter-profile-bio');
        let profilePicture = document.querySelector('#profile-picture');
                
        console.log(data);
        
       cardContainer.style.cssText = 'background-image:url("' + data.profile_banner_url + '"); display: block;';
       rearCardContainer.style.cssText = 'background-image:url("' + data.profile_banner_url + '"); display: block;';       
       nameContainer.innerHTML = data.name;
       handleContainer.innerHTML = '@' + data.screen_name;
       rearHandleContainer.innerHTML = '@' + data.screen_name;
       bioContainer.innerHTML = data.description;
       
       let profilePicURL = data.profile_image_url_https.split('_');
       profilePicture.src = profilePicURL[0] + '_' + profilePicURL[1] + '.jpg';
    }
    
    function HTMLToCanvas() {
        
        let canvasContainer = document.querySelector('#canvas-container');
        
        html2canvas(document.querySelector("#twitter-card-conatiner")).then(canvas => {
            canvasContainer.appendChild(canvas)
        });
        
        html2canvas(document.querySelector("#twitter-card-conatiner-rear")).then(canvas => {
            canvasContainer.appendChild(canvas)
        });        
        
    }

}

init();