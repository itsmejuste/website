let score = 0;
let lives = 3;
let timeLeft = 60;
gameTime = timeLeft;


function startTimer() {
    console.log("startTimer");
    if (timeLeft === 0) {
        gameOver();
    } else {
        setTimeout(printTime, 1000);
    }
}

function printTime() {
    console.log("printTime");

    if (timeLeft > 0) {
        timeLeft--;
        console.log("timeLeft: " + timeLeft);
        startTimer();
        document.querySelector("#time_board").textContent = timeLeft;
    } else {
        gameOver();
    }
}

function gameOver() {
    console.log("gameOver");
}

window.addEventListener("load", start);

function start() {
    console.log("start");
    gameRunning = true
    score = 0;
    lives = 3;
    timeLeft = gameTime;
    showTime();
    document.querySelector(".playagain1").addEventListener("click", restartGame);
    document.querySelector(".playagain2").addEventListener("click", restartGame);
}

document.querySelector("#container1").addEventListener("click", hitBee);
document.querySelector("#container1").addEventListener("animationiteration", squeezedBee);
document.querySelector("#container2").addEventListener("click", hitBee);
document.querySelector("#container2").addEventListener("animationiteration", squeezedBee);
document.querySelector("#container3").addEventListener("click", hitBee);
document.querySelector("#container3").addEventListener("animationiteration", squeezedBee);
document.querySelector("#container4").addEventListener("click", hitBee);
document.querySelector("#container4").addEventListener("animationiteration", squeezedBee);


document.querySelector("#score_board").textContent="Score: " + score + " points";
document.querySelector("#score_board").textContent = `Score: ${score} points`;
document.querySelector("#health_board").textContent="Lives: " + "lives";
document.querySelector("#health_board").textContent = `Lives: ${lives}`;
document.querySelector("#time_board").textContent="Countdown: " + timeLeft;
document.querySelector("#time_box").textContent = `${timeLeft}`;


function hitBee() {
    console.log("hitBee");
    document.querySelector("#container1").classList.add("stop");
    document.querySelector("#sprite1").classList.add("scaleAndDisappear");
    document.querySelector("#sprite1").addEventListener("animationend", restartBee);
    getAPoint();
}
function restartBee() {
    console.log("restartBee");
    document.querySelector("#container1").classList.value= "";
    document.querySelector("#sprite1").classList.value= "";
    document.querySelector("#sprite1").removeEventListener("animationend", restartBee);
    document.querySelector("html").offsetHeight;
    let rndPos = generateRandomNumber();
    console.log(rndPos);
    document.querySelector("#container1").classList.add("position" + rndPos);
    //random number generator on the speed
}
//add a random position here

function squeezedBee() {
    console.log("squeezedBee");
    loseLife();
    restartBee();
    this.classList.value = "";
    this.firstElementChild.classList.value = "";
    document.querySelector("html").offsetHeight;
    let rndPos = generateRandomNumber();
    this.classList.add("position" + rndPos);
}

function getAPoint() {
    console.log("getAPoint");
    score++;
    document.querySelector("#score_board").textContent = `Score: ${score} points`;
}

function loseLife() {
    console.log("loseLife");
    lives--;
    console.log("Live");
    // Adding the if stucture to the function
    if (lives < 1) {
        loseGame()
    }
    document.querySelector("#health_board").textContent = `Lives: ${lives}`;
}

function generateRandomNumber() {
    console.log("generateRandomNumber");
    return Math.floor(Math.random() * 4 + 1);
}

function loseGame() {
    console.log("loseGame");
    gameRunning = false;

    document.querySelector("#game_over").classList.remove("hidden");
}

function winGame() {
    console.log("winGame");
    
    document.querySelector("#times_up").classList.remove("hidden");
}

