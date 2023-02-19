const randomText = document.getElementById("random");

const rockbutton = document.getElementById("rock-button");
const scissorbutton = document.getElementById("scissor-button");
const paperbutton = document.getElementById("paper-button");
const rules = document.getElementById("rules");
const score = document.getElementById("Score");

rules.addEventListener("click", function() {
    alert("regras")
})

rockbutton.addEventListener("click", function() {
    let randomValue = Math.floor(Math.random() * 3);
    switch(randomValue) {
        case 0:
            randomValue = "Rock";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
            break;
        case 1:
            randomValue = "Scissor";
            randomText.innerHTML = randomValue;
            score.innerHTML = "winner"
            break;
        case 2:
            randomValue = "Paper";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Lost"
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
            break;
        case 1:
            randomValue = "Scissor";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
            break;
        case 2:
            randomValue = "Paper";
            randomText.innerHTML = randomValue;
            score.innerHTML = "winner"
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
            break;
        case 1:
            randomValue = "Scissor";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Lost"
            break;
        case 2:
            randomValue = "Paper";
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
            break;
    }
});
