function rollDice() {
    var roll1 = (Math.floor( Math.random() * 6) + 1);
    var roll2 = (Math.floor( Math.random() * 6) + 1);

    var img1 = "./images/dice" + roll1 + ".png";
    var img2 = "./images/dice" + roll2 + ".png";

    document.querySelector(".player-1").setAttribute("src", img1);
    document.querySelector(".player-2").setAttribute("src", img2);

    if (roll1 > roll2) {
        document.querySelector("h1").innerHTML = "<em>Player 1 Wins!</em>";
            document.querySelector(".greeting").innerHTML = "Hooray!"
    } else if (roll2 > roll1) {
        document.querySelector("h1").innerHTML = "<em>Player 2 Wins!</em>";
            document.querySelector(".greeting").innerHTML = "Hooray!"
    } else {
        document.querySelector("h1").innerHTML = "<em>DRAW!</em>";
        document.querySelector(".greeting").innerHTML = "Roll Again!";
    }
}


function animateDice() {
    document.querySelectorAll(".dice")[0].classList.add("rolled");
    document.querySelectorAll(".dice")[1].classList.add("rolled");
    var diceRoll = new Audio("./audio/dice-roll-37917 (mp3cut.net).mp3");
    diceRoll.play();

    setTimeout(() => {
        document.querySelectorAll(".dice")[0].classList.remove("rolled");}, 250);
    setTimeout(() => {
        document.querySelectorAll(".dice")[1].classList.remove("rolled");}, 250);

    setTimeout(() => {
        rollDice();}, 250);

}


/*
document.querySelector("button").addEventListener("click", rollDice);
*/
document.querySelector("button").addEventListener("click", animateDice);
