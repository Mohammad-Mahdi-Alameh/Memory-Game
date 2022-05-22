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

var btn_id,level = 1 , user_choice , correct_choice , random_color , random_index ,  color ;

var sequence=[];

var checking_sequence=new Array();

function activateButton(id) { //activate single button with given id

    document.getElementById(id).addEventListener("click", function () {
      clicked(id);
    });

}
function deactivateButton(id) { //deactivate single button with given id

    document.getElementById(id).removeEventListener("click", function () {
        clicked(id);
    });

}

function activateButtons(){ //activate all buttons
    colors.forEach(activateButton);
}

function deactivateButtons(){ //deactivate all buttons from all listeners
    for(let i=0;i<colors.length;i++){
        let element = document. getElementById(colors[i]);
        element. parentNode. removeChild(element);

    }

}


// function activateButton(id) { //activate single button with given id
//     document.getElementById(id).addEventListener("click", clicked);
//
// }
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

// function activateButtons(){ //activate all buttons
//     btn_id=colors[i];
//
//     for(var i=0;i<colors.length;i++){
//         activateButton(colors[i]);
//         btn_id=colors[i];
//
//     }
// }

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

    sequence.push(random_color);

    checking_sequence=sequence.reverse();}




var j=0;
var user_choices=[];
function checkAnswer() {

    if(sequence[j]!==user_choice){
        gameOver();
    }
    else{



    correct_choice=checking_sequence.pop();
    user_choices.push(user_choice);
    if (user_choice !== correct_choice)

    {gameOver();}

    else if(checking_sequence.length === 0){
            newLevel();
        }
    }}



// function newLevel() {
//     level++;
//     header.innerHTML = "Level " + level;
//     getRandomColor();
//     showRandomColor(random_color);
//     addColorToSequence();
//     // header.innerHTML=sequence[0]+sequence[1]+sequence[2];
// }
//     // correct=0;
//     // correct_choice=sequence[correct];
//     // if (user_choice !== correct_choice)
    //
    //     gameOver();




function gameOver() {
    playSound("wrong");
    document.body.style.backgroundColor = "red";
    header.innerHTML = "Game Over, Press Any Key to <br> Restart";
    setTimeout(() => {
        resetButton(document.body.style.backgroundColor = "#1a2041");
    }, 150);
    document.addEventListener("keypress", startGame);
    sequence.splice(0, sequence.length);
}


    // deactivateButtons();




//reset score  sequence level deactivate button gameover

