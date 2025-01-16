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

let isActiveRules = false


let placarScore = 0

function updateScoreboard(resultado) {


    const placar = document.getElementById("placar");
    placar.textContent = placarScore;
    showLoading();
    setTimeout(hideloading, 1000);

    if (resultado === "drawn") {
        hideloading("drawn")
    } else if (resultado === "winner") {
        hideloading("winner")
    } else if (resultado === "lost"){
        hideloading("lost")
    }

console.log(resultado)
}
function showLoading() {
    loading.style.display = "block"
    imageadversary.style.display = "none"
    score.innerHTML = "loading..."
}
function hideloading(resultado) {
    setTimeout(() => {
        loading.style.display = "none";
        imageadversary.style.display = "block";

        if (resultado === "drawn") {
            score.innerHTML = "drawn";
        } else if (resultado === "winner") {
            score.innerHTML = "winner";
        } else if (resultado === "lost") {
            score.innerHTML = "lost";
        }

        console.log("1", resultado);
    }, 1000);
}

function PlayGames(playerChoice) {

    let randomValue = Math.floor(Math.random() * 3);
    const choices = ["rock", "scissor", "paper"];
    const EnemyChoice = choices[randomValue];

    yourimage.src = `images/${playerChoice.toLowerCase()}.svg`;
    imageadversary.src = `images/${EnemyChoice.toLowerCase()}.svg`;

    if (playerChoice === EnemyChoice) {
        updateScoreboard("drawn")

        if (placarScore > 0) {
            placarScore -= 1;
        }

    } else if (playerChoice === "rock" && EnemyChoice === "scissor" ||
        playerChoice === "paper" && EnemyChoice === " rock" ||
        playerChoice === "scissor" && EnemyChoice === "paper") {
        updateScoreboard("winner")

        placarScore += 1;
    } else {
        updateScoreboard("lost")
        if (placarScore > 0) {
            placarScore -= 1;
        }
    }
}

paperbutton.addEventListener("click", () => PlayGames("paper"))
rockbutton.addEventListener("click", () => PlayGames("rock"))
scissorbutton.addEventListener("click", () => PlayGames("scissor"))

rules.addEventListener("click", function () {

    isActiveRules = !isActiveRules

    if(isActiveRules) {
        rulesimage.style.display = "block"
    }else {
        rulesimage.style.display = "none"
    }

    
})