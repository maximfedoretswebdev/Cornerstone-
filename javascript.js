const loginErrorMsg = document.getElementById("login-error-msg");
var objPeople = [
        {
            username : "Maxim",
            password : "Vfrcbv2002!",
            class: "Manager"
        },
         {
            username : "Christina",
            password : "Christina2021",
            class: "Boss"
        },
         {
            username : "Danny",
            password : "Danny2021",
            class: "Coffeemaker"
        }
    ]

    function getInfo() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        for(i = 0 ; i < objPeople.length; i++) {
            if(username == objPeople[i].username && password == objPeople[i].
            password) {
                window.location = 'schedual.html';
                localStorage.setItem.password
            }
            else if(username == objPeople[0].username && password == objPeople[0].
                password){
                window.location = 'manager.html';
                document.getElementById('managerName').innerHTML = "Welcome back Max";
                }
            else{
            loginErrorMsg.style.opacity = 1;
        }
        
        }
    }

    // Normal People
    function GreetingTime(){
        // Array of the Days
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        // Getting the  current day
        var current_date = new Date();

        weekday_value = current_date.getDay();
        var today = new Date()
        var curHr = today.getHours()
        if (curHr >= 0 && curHr < 6) {
            document.getElementById("displayGrt").innerHTML = 'What are you doing that early?';
            document.getElementById('displayDate').innerHTML = "Today is " + weekdays[weekday_value];
        } else if (curHr >= 6 && curHr <= 12) {
            document.getElementById("displayGrt").innerHTML = 'Good Morning';
            document.getElementById('displayDate').innerHTML = "Today is " + weekdays[weekday_value];
        } else if (curHr >= 12 && curHr < 17) {
            document.getElementById("displayGrt").innerHTML = 'Good Afternoon';
            document.getElementById('displayDate').innerHTML = "Today is " + weekdays[weekday_value];
        } else {
            document.getElementById("displayGrt").innerHTML = 'Good Evening';
            document.getElementById('displayDate').innerHTML = "Today is " + weekdays[weekday_value];
        }
    }

// Manager
    function GreetingTimeManager(){
      // Array of the Days
      var weekdays = new Array(7);
      weekdays[0] = "Sunday";
      weekdays[1] = "Monday";
      weekdays[2] = "Tuesday";
      weekdays[3] = "Wednesday";
      weekdays[4] = "Thursday";
      weekdays[5] = "Friday";
      weekdays[6] = "Saturday";
      // Getting the  current day
      var current_date = new Date();

      weekday_value = current_date.getDay();
      var today = new Date()
      var curHr = today.getHours()
        if (curHr >= 0 && curHr < 6) {
            document.getElementById("managerName").innerHTML = 'What are you doing that early Max?';
            document.getElementById('displayDate').innerHTML = "Today is " + weekdays[weekday_value];
        } else if (curHr >= 6 && curHr <= 12) {
            document.getElementById("managerName").innerHTML = 'Good morning, Max';
            document.getElementById('displayDate').innerHTML = "Today is " + weekdays[weekday_value];
        } else if (curHr >= 12 && curHr < 17) {
            document.getElementById("managerName").innerHTML = 'Good afternoon, Max';
            document.getElementById('displayDate').innerHTML = "Today is " + weekdays[weekday_value];
        } else {
            document.getElementById("managerName").innerHTML = 'Good evening, Max';
            document.getElementById('displayDate').innerHTML = "Today is " + weekdays[weekday_value];
        }
    }

