    //59.095072, 6.408786   Sandvatnet
    //Sunrise https://api.met.no/weatherapi/sunrise/2.0/.json?lat=59.933333&lon=10.716667&date=2022-03-04&offset=+01:00
    //https://www.yr.no/api/v0/locations/1-26212?language=nb
    
    
    function SendXMLJsonRequest(url) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();
        request.onload = ()=>{
          return JSON.parse(request.response);
        }
      }
  
      function GetSunriseTime() {
        var date = new Date()
        var sunTimes = "https://api.met.no/weatherapi/sunrise/2.0/.json?lat=59.095072&lon=6.408786&date="+ date.getFullYear() +"-0"+ date.getMonth() +"-0"+ date.getDate() +"&offset=+01:00";
        var jsonObj = SendXMLJsonRequest(sunTimes);
        var sunriseString = jsonObj.location.time[0].sunrise.time;
        var sunriseTime = sunriseString.match(/\d+:\d+/g);
        document.getElementById("output").innerHTML = "Sun rises at: " + sunriseTime[0];
      }
  
      function GetCurrentTime() {
        var currentDate = new Date();
        document.getElementById("currentDate").innerHTML = "Current date is " + currentDate;
      }
  
      var button = document.getElementById("myButton");
  
      GetCurrentTime();
      //GetSunriseTime();