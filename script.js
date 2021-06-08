
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const userImg = document.getElementById('userImg');
const compImg = document.getElementById('compImg');


const result = document.getElementById("result");


const userScoreText = document.getElementById("userScore");
const compScoreText = document.getElementById("compScore");

const round = document.getElementById('round');


const button = document.getElementById('btn');


let userScore =0;
let compScore =0;

let roundNumber = 1;


rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissor.addEventListener("click", playRound);
button.addEventListener("click", resetGame);  

function playRound(e) {
  if(roundNumber === 5) {                
    result.textContent = gameOver();
    return;
  }
  roundNumber++;
  round.textContent = roundNumber;
  const userChoice = e.target.id;
  userImg.src = displayCorrectImage(userChoice);
  const compChoice = computerChoice();
  compImg.src = displayCorrectImage(compChoice);
  const winner = findWinner(userChoice, compChoice);
  result.textContent = winner;
  userScoreText.textContent = userScore;
  compScoreText.textContent = compScore;
} 

function gameOver(){
  if (userScore > compScore){
    return "Game over,  User Win"
  } else if (userScore < compScore) {
    return "Game over,  Computer Win"
  } else {
      return "Game over, It's a draw";
  }
}

function resetGame() {     
    userScore =0;
    compScore =0;
    roundNumber = 0;
    result.textContent = "click";  
    userImg.src= "./Images/question.png";
    compImg.src= "./Images/question.png";
    userScoreText.textContent = userScore;
    compScoreText.textContent = compScore;
  }

function displayCorrectImage(choice){   
  if(choice === "scissor"){
    return "./Images/Scissor.png";
  } else if(choice === "paper"){
    return "./Images/Paper.png ";
  } else {
    return "./Images/Rock.png";
  }
}

function computerChoice() {               
  const choices = ["rock", "paper", "scissor"];   
  const index = Math.floor(Math.random() * choices.length);  
  const compChoice = choices[index];
  return compChoice; 
}


function findWinner(userChoice, compChoice){
  if(userChoice === compChoice) {
    return "draw!";
  } else if((userChoice ==="scissor" && compChoice==="rock") ||
      (userChoice ==="paper" && compChoice==="scissor")||
      (userChoice ==="rock" && compChoice==="paper")) {
        compScore++;
        return "Computer Win!";
      } else {
        userScore++;
        return "User Win!";
  }
}