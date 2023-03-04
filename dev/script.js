const randomText = document.getElementById("random");

const rockbutton = document.getElementById("rock-button");
const scissorbutton = document.getElementById("scissor-button");
const paperbutton = document.getElementById("paper-button");
const rules = document.getElementById("rules");
const score = document.getElementById("Score");

const imageadversary = document.getElementById("imageadversary");
const yourimage = document.getElementById("yourimage");

const loading = document.getElementById("spinner");

const rulesimage = document.getElementById("rulesimage");

let placarScore = 0

function updateScoreboard() {
    const placar = document.getElementById("placar");

    placar.textContent = placarScore
}


rockbutton.addEventListener("click", function() {
    function showLoading() {
        loading.style.display = "block"
        imageadversary.style.display = "none"
    }
    showLoading()
    function hideloading() {
        loading.style.display = "none"
        imageadversary.style.display = "block"
    }
    setTimeout(hideloading, 1000)
    let randomValue = Math.floor(Math.random() * 3);
    yourimage.src = "images/icon-rock.svg";
    switch(randomValue) {
        case 0:
            randomValue = "Rock";
            imageadversary.src = "images/icon-rock.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
            if (placarScore > 0) {
                placarScore -= 1;
            }
            updateScoreboard()
            break;
        case 1:
            randomValue = "Scissor";
            imageadversary.src = "images/icon-scissors.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "winner";
            placarScore += 1;
            updateScoreboard()
            break;
        case 2:
            randomValue = "Paper";
            imageadversary.src = "images/icon-paper.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "Lost"
            if (placarScore > 0) {
                placarScore -= 1;
            }
            updateScoreboard()
            break;
    }
});

scissorbutton.addEventListener("click", function() {
    function showLoading() {
        loading.style.display = "block"
        imageadversary.style.display = "none"
    }
    showLoading()
    function hideloading() {
        loading.style.display = "none"
        imageadversary.style.display = "block"
    }
    setTimeout(hideloading, 1000)
    let randomValue = Math.floor(Math.random() * 3);
    yourimage.src = "images/icon-scissors.svg";

    switch(randomValue) {
        case 0:
            randomValue = "Rock";
            imageadversary.src = "images/icon-rock.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "Lost"
             if (placarScore > 0) {
                placarScore -= 1;
            }
            updateScoreboard()
            break;
        case 1:
            randomValue = "Scissor";
            imageadversary.src = "images/icon-scissors.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
             if (placarScore > 0) {
                placarScore -= 1;
            }
            updateScoreboard()
            break;
        case 2:
            randomValue = "Paper";
            imageadversary.src = "images/icon-paper.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "winner"
            placarScore += 1;
            updateScoreboard()
            break;
    }
});


paperbutton.addEventListener("click", function() {
    function showLoading() {
        loading.style.display = "block"
        imageadversary.style.display = "none"
    }
    showLoading()
    function hideloading() {
        loading.style.display = "none"
        imageadversary.style.display = "block"
    }
    setTimeout(hideloading, 1000)
    yourimage.src = "images/icon-paper.svg";

    let randomValue = Math.floor(Math.random() * 3);
    switch(randomValue) {
        case 0:
            randomValue = "Rock";
            imageadversary.src = "images/icon-rock.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "winner"
            placarScore += 1;
            updateScoreboard()
            break;
        case 1:
            randomValue = "Scissor";
            imageadversary.src = "images/icon-scissors.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "Lost";
             if (placarScore > 0) {
                placarScore -= 1;
            }
            updateScoreboard()
            break;
        case 2:
            randomValue = "Paper";
            imageadversary.src = "images/icon-paper.svg"
            randomText.innerHTML = randomValue;
            score.innerHTML = "Draw"
             if (placarScore > 0) {
                placarScore -= 1;
            }
            updateScoreboard()
            break;
    }
});

/*Rules */

rules.addEventListener("click", function() {
    rulesimage.style.display = "block"
})