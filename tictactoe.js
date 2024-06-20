/**
 * Generates a random choice for the computer player.
 * @returns {string} The randomly generated choice ("rock", "paper", or "scissors").
 */
function getComputerChoice(){
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}
var humanScore, computerScore;
computerScore = humanScore = 0;

/**
 * Plays a round of rock-paper-scissors between a human and a computer.
 * Increments the score of the winner.
 * @param {string} humanChoice - The choice made by the human player (rock, paper, or scissors).
 * @param {string} computerChoice - The choice made by the computer player (rock, paper, or scissors).
 * @returns {string} - The result of the round (win, lose, or tie).
 */
function playRound(humanChoice){
        results = {
            "rock": {"rock": "tie", "paper": "lose", "scissors": "win"},
         "paper": {"rock": "win", "paper": "tie", "scissors": "lose"},
         "scissors": {"rock": "lose", "paper": "win", "scissors": "tie"}
    }
     result = results[humanChoice.toLowerCase()][getComputerChoice().toLowerCase()];
     result == "win" ? humanScore++ : result == "lose" ? computerScore++ : null;
     document.getElementById("results").textContent = `You ${result} this round!`;
     document.getElementById("score").textContent = `Human: ${humanScore} Computer: ${computerScore}`;
     if (humanScore >= 5 || computerScore >=  5){
         winner = humanScore >= 5 ? "You win!" : "You lose!";
         document.getElementById("results").textContent = winner;
         humanScore = computerScore = 0;
         alert(`Game over! ${winner}`)
     }
}