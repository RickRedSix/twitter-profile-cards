function init() {    
    
    let generateButton = document.querySelector('#generate-button');
    
    generateButton.addEventListener("click", function () {  
        
        let handleInput = document.querySelector('#handle-input').value;
        
        console.log(handleInput);
        
        getProfileDetails(handleInput);
        
    });
    
    function getProfileDetails(handle) {
        
        fetch('/generate/' + handle, {
                method: 'get'
            })
            .then(response => response.json())    
            .then(jsonData => console.log(jsonData))
            .catch(err => {
                //error block
            });
            
    }

}

init();