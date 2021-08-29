const loginErrorMsg = document.getElementById("login-error-msg");
var objPeople = [
        {
            username : "Maxim",
            password : "Vfrcbv2002!"
        },
         {
            username : "Christina",
            password : "Christina2021"
        },
         {
            username : "Mark",
            password : "Mark2022"
        }
    ]
    
    function getInfo() {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        
        for(i = 0 ; i < objPeople.length; i++) {
            if(username == objPeople[i].username && password == objPeople[i].
            password) {
                window.location = 'schedual.html';
                return
            }
        }
            loginErrorMsg.style.opacity = 1;
    }
