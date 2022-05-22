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

const colors=["red","yellow","blue","green"];

var color;

var sequence;

function activateButton(id) {

document.getElementById(id).addEventListener("click", function () {
    color = id;
    playSound(id);
    styleButtonOnClick(document.getElementById(id));
    setTimeout(() => {
        resetButton(document.getElementById(id));
    }, 400);
});}

function activateButtons(){
    colors.forEach(activateButton);
}

activateButtons();
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


//when starting game first time

let random_index=getRandom(0,3);

let random_color=colors[random_index];

// header.innerHTML = "mm";

let promise;
function playSound(id) {
    switch (id) {
        case "red":
            promise = red_sound.play();
            break;
        case "blue":
            promise = blue_sound.play();
            break;
        case "green":
            promise = green_sound.play();
            break;
        case "yellow":
            promise = yellow_sound.play();
            break;
        case "wrong":
            promise = wrong_sound.play();
            break;
        default:
            break;


    }

}

function showRandomColor(id) {

    playSound(id);
    document.getElementById(id).style.visibility="hidden";
    setTimeout(()=>{document.getElementById(id).style.visibility="visible";},400);

}

document.addEventListener("keypress",function() {
    startGame();

});
function startGame() {
    header.innerHTML="Level 1"
    showRandomColor(random_color);
}



