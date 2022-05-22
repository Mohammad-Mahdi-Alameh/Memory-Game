let green_btn=document.getElementById("green");

let red_btn=document.getElementById("red");

let yellow_btn=document.getElementById("yellow");

let blue_btn=document.getElementById("blue");

let header=document.getElementById("header");

let green_sound=new Audio("../assets/sounds/green.mp3");

let red_sound=new Audio("../assets/sounds/red.mp3");

let yellow_sound=new Audio("../assets/sounds/yellow.mp3");

let blue_sound=new Audio("../assets/sounds/blue.mp3");

let wrong_sound=new Audio("../assets/sounds/wrong.mp3");

var color;

red_btn.addEventListener("click",function () {
    color="red";
    red_sound.play();
    styleButtonOnClick(red_btn);
    setTimeout(()=>{resetButton(red_btn);},400);


});
blue_btn.addEventListener("click",function () {
    color="blue";
    blue_sound.play();
    styleButtonOnClick(blue_btn);
    setTimeout(()=>{resetButton(blue_btn);},400);


});
green_btn.addEventListener("click",function () {
    color="green";
    green_sound.play();
    styleButtonOnClick(green_btn);
    setTimeout(()=>{resetButton(green_btn);},400);


});
yellow_btn.addEventListener("click",function () {
    color="yellow";
    yellow_sound.play();
    styleButtonOnClick(yellow_btn);
    setTimeout(()=>{resetButton(yellow_btn);},400);


});


function styleButtonOnClick(button) {
    button.style.backgroundColor="grey";
    button.style.boxShadow="0px 0px 15px white";
}

function resetButton(button) {
    button.style.backgroundColor=color;
    button.style.boxShadow="0px 0px 0px";

}


function getRandom(min, max) {    //function to give random integer between 2 values; min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let colors=["red","yellow","blue","green"];

let random_index=getRandom(0,3);

let random_color=color[random_index];





