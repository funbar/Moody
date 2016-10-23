// JavaScript File
var weather = '';
var actualWeather = '';
var conditionFinal = '';
var weatherFinal = '';

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var mood = getParameterByName('mood');


function removeHidden()
{
    document.getElementById('weather-choices').className = '';
}

function insertContent(id, content)
{
    document.getElementById(id).innerHTML = content;
}

function ajaxCall(request, cb) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               
             var result = JSON.parse(xmlhttp.responseText);
      //       console.log(result);
             //var test = JSON.parse(xmlhttp.response);
             //var detailedResults = test.query.results;
             //console.log('test city' + detailedResults);
             cb(result);

           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open('GET', request, true);
    xmlhttp.send();
//return result;
}
//http://api.wunderground.com/api/06374893a86b9e3f/geolookup/q/94107.json

function grabZip(){
    var userZipcode = document.getElementById('zipcode').value;
    //console.log(userZipcode);
    var weatherUrl = '//api.wunderground.com/api/06374893a86b9e3f/geolookup/q/' + userZipcode + '.json';
    ajaxCall(weatherUrl, function(result)
    {
        weather = result;
        //console.log(Object.keys(weather));
        var state = weather.location.state;
        var city  = weather.location.city;
        
        var tempUrl = '//api.wunderground.com/api/06374893a86b9e3f/conditions/q/' + state + '/' + city +'.json';

        console.log(weather);
        ajaxCall(tempUrl, function(finalResult){
        actualWeather = finalResult;
        console.log(actualWeather.current_observation.temp_f);
        weatherFinal = actualWeather.current_observation.temp_f;
        
        conditionFinal = actualWeather.current_observation.weather;
        insertContent('apiTemp', weatherFinal);
        insertContent('apiCond', conditionFinal);
            
        });
        removeHidden();
        //console.log('hello');
    });
  //  setTimeout(function() { console.log('weatherrrr' +weather); }, 3000);
}


function zipSubmitted() {
    var feelsLike = '';
    
    if(weatherFinal < 50)
    {
        feelsLike = 'chill';
    }
    else
    {
        feelsLike = 'hot';
    }
    window.location = './music.html?mood=' + mood + '&weather=' + feelsLike;
    
}

