var happy = [ "cheerful", "lively", "happiness", "bright", "edm", "party" ]
var accomplished = [ "finished", "winner", "achieve", "touchdown", "celebratory", "champions", "party"];
var lazy = [ "chill", "chill%20vibes", "laid%20back", "passive", "tired", "dull", "chill%20blues", "rainy%20days" ];
var okay = [ "alright", "mundane", "basic"  ];
var meh = [ "whatever", "meh", "muggy%20days" ];
var tired = [ "orchestra", "sleepy", "piano", "soundtracks", " piano%20soundtracks " ];
var annoyed = [ "irritated", "upset"];
var sick = [ "ill", "fever", "relaxing%20in%20bed" ];
var sad = [ "Donald%20Trump" ];

var rand;
var Happy, Accomplished, Lazy, Okay, Meh, Tired, Annoyed, Sick, Sad;
Happy = Accomplished = Lazy = Okay = Meh = Tired = Annoyed = Sick = Sad = 0;

function moodChosen(mood) {
  /*  
    switch (mood)
            {
               case 'happy': rand = Math.floor((Math.random() * (happy.length - 1)) + 0);
               console.log("This is rand", rand);
               mood = happy[rand];
               break;
        
               default: 
            }
*/
    if(mood == "happy")
    {
        rand = Math.floor((Math.random() * (happy.length - 1)) + 0);
        //console.log("This is rand", rand);
        
        mood = happy[rand];
        Happy++;
        console.log("This is happy's count" + Happy);
    }    
    if(mood == "accomplished")
    {    
        rand = Math.floor((Math.random() * (accomplished.length - 1)) + 0);
        console.log("This is rand", rand);
        mood = accomplished[rand];
    }    
    if(mood == "lazy")
    {
        rand = Math.floor((Math.random() * (lazy.length - 1)) + 0);
        console.log("This is rand", rand);
        mood = lazy[rand];
    }
    if(mood == "okay")
    {
        rand = Math.floor((Math.random() * (okay.length - 1)) + 0);
        console.log("This is rand", rand);
        mood = okay[rand];
    }
    if(mood == "meh")
    {
        rand = Math.floor((Math.random() * (meh.length - 1)) + 0);
        mood = meh[rand];
        
    }
    if(mood == "tired")
    {
        rand = Math.floor((Math.random() * (tired.length - 1)) + 0);
        mood = tired[rand];
        
    }
    if(mood == "annoyed")
    {
        rand = Math.floor((Math.random() * (annoyed.length - 1)) + 0);
        //console.log("This is rand", rand);
        mood = annoyed[rand];
        
    }
    if(mood == "sick")
    {
        rand = Math.floor((Math.random() * (sick.length - 1)) + 0);
        //console.log("This is rand", rand);
        mood = sick[rand];
        
    }
    // tired annoyed sick
    if(mood == "sad")
    {
        rand = Math.floor((Math.random() * (sad.length - 1)) + 0);
        mood = sad[rand];
    }
    
    
    
    window.location = './weather.html?mood=' + mood;
    
}

