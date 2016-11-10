var happy = [ "cheerful", "lively", "happiness", "bright", "edm" ]
var accomplished = [ "finished", "winner", "achieve", "touchdown", "celebratory", "champions"];
var lazy = [ "chill", "laidback", "passive", "tired", "dull", "blues" ];
var okay = [ "alright", "mundane", "basic",  ];
var meh = [ "whatever", "meh" ];
var tired = [ "fatigued", "sleepy", "piano", "soundtracks", " %20 " ];
var annoyed = [ "irritated", "Donald"];
var sick = [ "ill" ];
var sad = [ "Donald%20Trump" ];

var rand;
function moodChosen(mood) {
    
    if(mood == "happy")
    {
        rand = Math.floor((Math.random() * happy.length - 1) + 0);
        console.log("This is rand", rand);
        mood = happy[rand];
    }
    
    if(mood == "sad")
    {
        rand = Math.floor((Math.random() * sad.length - 1) + 0);
        mood = sad[rand];
    }
    
    
    
    window.location = './weather.html?mood=' + mood;
    
}

