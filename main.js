var album = ["water_bottle.png",
"bowl_prev_ui.png", 
"comb.png", 
"light-bulb-png-bulb-png1243-0-removebg-preview.png", 
"unnamed-removebg-preview.png", 
"phone.png", 
"alarm_clock.png", 
"padlock.png", 
"191-1916611_logo-clipart-chargers-mobile-charger-png-transparent-png-removebg-preview.png", 
"headphones.png"];
var mobilenetscore = 0;
var googlelensscore = 0;
var trueorfalse = "false";

function water_bottle_div() {
    document.getElementById("main_image_div").src = album[0];
    document.getElementById("main_div").style.display = "initial";
document.getElementById("result").style.display = "none";
   googlelensscore = googlelensscore + 1;
   mobilenetscore = mobilenetscore + 1;
   document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
   document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "water bottle";
    document.getElementById("google_lens_guess").innerHTML = "water bottle.";
}
function bowl_div(){
    document.getElementById("main_image_div").src = album[1];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";
    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "bowl";
    document.getElementById("google_lens_guess").innerHTML = "bowl.";
}
function comb_div(){
    document.getElementById("main_image_div").src = album[2];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";
    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "comb";
    document.getElementById("google_lens_guess").innerHTML = "comb.";
}
function light_bulb_div(){
    document.getElementById("main_image_div").src = album[3];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";
    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";

        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "light bulb";
    document.getElementById("google_lens_guess").innerHTML = "light bulb.";
}
function glass_div(){
    document.getElementById("main_image_div").src = album[4];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";

    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "glass";
    document.getElementById("google_lens_guess").innerHTML = "glass.";
}
function phone_div(){
    document.getElementById("main_image_div").src = album[5];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";

    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "phone";
    document.getElementById("google_lens_guess").innerHTML = "phone.";
}
function clock_div(){
    document.getElementById("main_image_div").src = album[6];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";

    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "clock";
    document.getElementById("google_lens_guess").innerHTML = "clock.";
}
function padlock_div(){
    document.getElementById("main_image_div").src = album[7];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";
    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "padlock";
    document.getElementById("google_lens_guess").innerHTML = "padlock.";
}
function charger_div(){
    document.getElementById("main_image_div").src = album[8];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";
    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "charger";
    document.getElementById("google_lens_guess").innerHTML = "charger.";
}
function headphones_div(){
    document.getElementById("main_image_div").src = album[9];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";

    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "headphones";
    document.getElementById("google_lens_guess").innerHTML = "headphones";
}