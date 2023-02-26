const randomText = document.getElementById("random");

const rockbutton = document.getElementById("rock-button");
const scissorbutton = document.getElementById("scissor-button");
const paperbutton = document.getElementById("paper-button");
const rules = document.getElementById("rules");
const score = document.getElementById("Score");

const rulesimage = document.getElementById("rulesimage");

let placarScore = 0

function updateScoreboard() {
    const placar = document.getElementById("placar");

    placar.textContent = placarScore
}

rockbutton.addEventListener("click", function() {

    let randomValue = Math.floor(Math.random() * 3);
    switch(randomValue) {
        case 0:
            randomValue = "Rock";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
            placarScore -= 1;
            updateScoreboard()
            break;
        case 1:
            randomValue = "Scissor";
            randomText.innerHTML = randomValue;
            score.innerHTML = "winner";
            placarScore =+ 1;
            updateScoreboard()
            break;
        case 2:
            randomValue = "Paper";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Lost"
            placarScore -= 1;
            updateScoreboard()
            break;
    }
});

scissorbutton.addEventListener("click", function() {
    let randomValue = Math.floor(Math.random() * 3);
    switch(randomValue) {
        case 0:
            randomValue = "Rock";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Lost"
            placarScore -= 1;
            updateScoreboard()
            break;
        case 1:
            randomValue = "Scissor";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
            placarScore -= 1;
            updateScoreboard()
            break;
        case 2:
            randomValue = "Paper";
            randomText.innerHTML = randomValue;
            score.innerHTML = "winner"
            placarScore =+ 1;
            updateScoreboard()
            break;
    }
});

paperbutton.addEventListener("click", function() {
    let randomValue = Math.floor(Math.random() * 3);
    switch(randomValue) {
        case 0:
            randomValue = "Rock";
            randomText.innerHTML = randomValue;
            score.innerHTML = "winner"
            placarScore =+ 1;
            updateScoreboard()
            break;
        case 1:
            randomValue = "Scissor";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Lost"
            placarScore -= 1;
            updateScoreboard()
            break;
        case 2:
            randomValue = "Paper";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
            placarScore -= 1;
            updateScoreboard()
            break;
    }
});

/*Rules */

rules.addEventListener("click", function() {
    alert("regras")
    rulesimage.style.display = "block"
})