var music = '';

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
var weather = getParameterByName('weather'); 
var length;
var rand;

function ajaxCall(request, cb) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               
             var result = JSON.parse(xmlhttp.responseText);
             console.log(result);
             length = result.playlists.items.length;
             if(length == 0)
             {
                 createPlaylist(true);
             }
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

// function grabMusic(){
    //var userZipcode = document.getElementById('zipcode').value;
  //  console.log(userZipcode);
    // https://api.spotify.com/v1/search?q="kendrick lamar"&type=playlist"
    //weather = 'day';
    var customUrl = mood + '%20' + weather;

    function createPlaylist(repeat){
  
        if(repeat || length == 0){
        var musicUrl = '//api.spotify.com/v1/search?q="' + mood + '"&type=playlist';
            
        }
        else if(length == 0){
        var musicUrl = '//api.spotify.com/v1/search?q="' + customUrl + '"&type=playlist';
        }
//        console.log(musicUrl);
        ajaxCall(musicUrl, function(result)
        {

            music = result;
            rand = Math.floor((Math.random() * music.playlists.items.length - 1) + 0);
            if(rand < 0)
            {
                rand = 0;
            }
            console.log("This is rand test", rand);
            var uri = music.playlists.items[rand].uri;
            var ifrm = document.createElement('iframe');
            var frameUrl = '//embed.spotify.com/?uri=' + uri;
            // assign url
            ifrm.setAttribute('src', frameUrl);
            ifrm.setAttribute('width', '100%');
            ifrm.setAttribute('height', 400);
            ifrm.setAttribute('frameborder', 0);
            ifrm.setAttribute('allowtransparency', true);
            ifrm.setAttribute('class', 'card-shadow')
            // seems to generate get error
            document.getElementById("show-playlist").appendChild(ifrm);
            //console.log('hello');
        });
        
    }
 
createPlaylist();
//console.log(music);
//var zipcode = document.getElementById("zipcode");
