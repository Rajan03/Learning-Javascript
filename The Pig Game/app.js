/*
GAME RULES:
- A player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, roundScore, activePlayer, gamePlaying;

// initial conditions in game
initGame();

// New Game Condition
document.querySelector(".btn-new").addEventListener("click", initGame);

// Rolling the dice
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Random number btw 1 and 6
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display result on dice
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "img/dice-" + dice + ".png";

    // 3. Update round score
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

// On Hold
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add current score to global score
    scores[activePlayer] += roundScore;

    // Update Score on Player panel
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

function initGame() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none"; //invisible dice

  // Reset Global score of 1st player
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  // Reset current scores
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Resets Players name from Winner to ! and 2
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  // Removes winner class and active class from players Elements
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  // First Element is given active class
  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  // Resetting the current score back to 0
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Changeing active status of each player
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Dice gets hide again
  document.querySelector(".dice").style.display = "none";
}

//  instructionsof the game
document.querySelector(".instructions").addEventListener("click", function () {
  document.querySelector(".rules").classList.add("show");
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".rules").classList.remove("show");
  });
});
