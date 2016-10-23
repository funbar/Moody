// JavaScript File
// JavaScript File
var music = '';

function ajaxCall(request, cb) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               
             var result = JSON.parse(xmlhttp.responseText);
             console.log(result);
             //var test = JSON.parse(xmlhttp.response);
             //var detailedResults = test.query.results;
             //console.log("test city" + detailedResults);
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
    function createPlaylist(){
    var musicUrl = '//api.spotify.com/v1/search?q="Gambino"&type=playlist';
    ajaxCall(musicUrl, function(result)
    {
        music = result;
        let uri = music.playlists.items[0].uri;
        console.log(music.playlists.items[0].uri);
        
        
        var ifrm = document.createElement('iframe');
      //  ifrm.setAttribute('id', 'ifrm'); // assign an id
        
        //document.body.appendChild(ifrm); // to place at end of document
        
        // to place before another page element
        //var el = document.getElementById('marker');
       // el.parentNode.insertBefore(ifrm, el);
        
        var frameUrl = '//embed.spotify.com/?uri=' + uri;
        // assign url
        ifrm.setAttribute('src', frameUrl);
        ifrm.setAttribute('width', '100%');
        ifrm.setAttribute('height', 400);
        ifrm.setAttribute('frameborder', 0);
        ifrm.setAttribute('allowtransparency', true);
        ifrm.setAttribute('class', 'card-shadow')
        
        document.getElementById("show-playlist").appendChild(ifrm);
        console.log('hello');
    });
    
    }
    setTimeout(function() { console.log("music test" + music ); }, 3000);
//}
createPlaylist();
console.log(music);
//var zipcode = document.getElementById("zipcode");
//console.log('hello ' + document.getElementById('zipcode').value);
//console.log(document);
// get data: