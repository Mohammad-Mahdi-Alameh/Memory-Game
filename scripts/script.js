let header=document.getElementById("header");

let green_sound=new Audio("../assets/sounds/green.mp3");

let red_sound=new Audio("../assets/sounds/red.mp3");

let yellow_sound=new Audio("../assets/sounds/yellow.mp3");

let blue_sound=new Audio("../assets/sounds/blue.mp3");

let wrong_sound=new Audio("../assets/sounds/wrong.mp3");

const colors=["red","yellow","blue","green"];

var counter=0 , sequence=[] , level = 1 , user_choice , random_color , random_index ,  color ;


function activateButton(id) { //activate single button with given id

    document.getElementById(id).addEventListener("click", function () {

      clicked(id);

    });

}

function activateButtons(){ //activate all buttons

    colors.forEach(activateButton);

}


function deactivateButtons(){ //deactivate all buttons from all listeners

    for(let i=0;i<colors.length;i++){

        document.getElementById(colors[i]).replaceWith(document. getElementById(colors[i]).cloneNode(false));

    }

}


function clicked(btn_id) {

    color=btn_id;

    playSound(btn_id);

    styleButtonOnClick(document.getElementById(btn_id));

    setTimeout(() => {
        resetButton(document.getElementById(btn_id));
    }, 400);

    iWasPressed(btn_id);

    checkAnswer();
}

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
function getRandomColor() {

    random_index=getRandom(0,3);

    random_color=colors[random_index];

}


//Start Game

document.addEventListener("keypress",startGame);

//
function startGame() {

    level=1;

    sequence=[];

    header.innerHTML="Level "+level;

    getRandomColor();

    addColorToSequence();

    showRandomColor(random_color);//show random color on screen for the user

    activateButtons();

    document.removeEventListener("keypress",startGame);



}
function iWasPressed(id){

    user_choice=id;
}

//when starting game first time


function addColorToSequence() {

    sequence.push(random_color);}




function checkAnswer() {

    if (user_choice === sequence[counter])

        counter++;

    else

        gameOver();

    if(counter ===sequence.length)
        newLevel();

}

function newLevel() {

    level++;

    header.innerHTML = "Level " + level;

    getRandomColor();

    showRandomColor(random_color);

    addColorToSequence();

    counter=0;
}




function gameOver() {

    playSound("wrong");

    document.body.style.backgroundColor = "red";

    header.innerHTML = "Game Over, Press Any Key to <br> Restart";

    setTimeout(() => {
        resetButton(document.body.style.backgroundColor = "#1a2041");
    }, 150);

    document.addEventListener("keypress", startGame);

    deactivateButtons();

}




