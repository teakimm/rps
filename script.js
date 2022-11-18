const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");
const details = document.querySelector(".game-details");
const buttonUi = document.querySelector(".button-ui");

rock.addEventListener('click', e => {
  document.getElementsByClassName("player-choice")[0].src="https://www.dictionary.com/e/wp-content/uploads/2018/09/moai-emoji.png";
  let cpuChoice = getComputerChoice();
  if(cpuChoice === "Rock") {
    document.getElementsByClassName("cpu-choice")[0].src="https://www.dictionary.com/e/wp-content/uploads/2018/09/moai-emoji.png";
  } else if (cpuChoice === "Paper") {
    document.getElementsByClassName("cpu-choice")[0].src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f9fb.png";
  } else {
    document.getElementsByClassName("cpu-choice")[0].src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/2702.png"
  }
  document.getElementsByClassName("round-result")[0].innerHTML = playRound("Rock", cpuChoice)
  document.getElementsByClassName("score")[0].innerHTML = "Score: " + playerWins + " to " + cpuWins;
  document.getElementsByClassName("rounds")[0].innerHTML = "Rounds Played: " + rounds;
  if(rounds === 5) {
    const gameResult = document.createElement('p');
    if(playerWins === cpuWins) {
      gameResult.textContent = "After 5 rounds, you have tied with the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer).';
      details.appendChild(gameResult);
    } else if (playerWins > cpuWins) {
      gameResult.textContent = "After 5 rounds, you have won against the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer). Good job!';
      details.appendChild(gameResult);
    } else {
      gameResult.textContent = "After 5 rounds, you have lost against the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer). Skill issue.';
      details.appendChild(gameResult);
    }
  }
});
paper.addEventListener('click', e => {
  document.getElementsByClassName("player-choice")[0].src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f9fb.png";
  let cpuChoice = getComputerChoice(); 
  if(cpuChoice === "Rock") {
    document.getElementsByClassName("cpu-choice")[0].src="https://www.dictionary.com/e/wp-content/uploads/2018/09/moai-emoji.png";
  } else if (cpuChoice === "Paper") {
    document.getElementsByClassName("cpu-choice")[0].src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f9fb.png";
  } else {
    document.getElementsByClassName("cpu-choice")[0].src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/2702.png"
  }
  document.getElementsByClassName("round-result")[0].innerHTML = playRound("Paper", cpuChoice);
  document.getElementsByClassName("score")[0].innerHTML = "Score: " + playerWins + " to " + cpuWins;
  document.getElementsByClassName("rounds")[0].innerHTML = "Rounds Played: " + rounds;
  if(rounds === 5) {
    const gameResult = document.createElement('p');
    if(playerWins === cpuWins) {
      gameResult.textContent = "After 5 rounds, you have tied with the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer).';
      details.appendChild(gameResult);
    } else if (playerWins > cpuWins) {
      gameResult.textContent = "After 5 rounds, you have won against the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer). Good job!';
      details.appendChild(gameResult);
    } else {
      gameResult.textContent = "After 5 rounds, you have lost against the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer). Skill issue.';
      details.appendChild(gameResult);
    }
  }
  
});
scissors.addEventListener('click', e => {
  document.getElementsByClassName("player-choice")[0].src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/2702.png"
  let cpuChoice = getComputerChoice();
  if(cpuChoice === "Rock") {
    document.getElementsByClassName("cpu-choice")[0].src="https://www.dictionary.com/e/wp-content/uploads/2018/09/moai-emoji.png";
  } else if (cpuChoice === "Paper") {
    document.getElementsByClassName("cpu-choice")[0].src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f9fb.png";
  } else {
    document.getElementsByClassName("cpu-choice")[0].src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/2702.png"
  }
  document.getElementsByClassName("round-result")[0].innerHTML = playRound("Scissors", cpuChoice);
  document.getElementsByClassName("score")[0].innerHTML = "Score: " + playerWins + " to " + cpuWins;
  document.getElementsByClassName("rounds")[0].innerHTML = "Rounds Played: " + rounds;
  if(rounds === 5) {
    const gameResult = document.createElement('p');
    if(playerWins === cpuWins) {
      gameResult.textContent = "After 5 rounds, you have tied with the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer).';
      details.appendChild(gameResult);
    } else if (playerWins > cpuWins) {
      gameResult.textContent = "After 5 rounds, you have won against the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer). Good job!';
      details.appendChild(gameResult);
    } else {
      gameResult.textContent = "After 5 rounds, you have lost against the computer with a score of " + playerWins + ' (You) to ' + cpuWins + ' (Computer). Skill issue.';
      details.appendChild(gameResult);
    }
  }
});

function getComputerChoice() {
  let rps = ['Rock', 'Paper', 'Scissors'];
  return rps[Math.floor(Math.random() * rps.length)];
}
let playerWins = 0;
let cpuWins = 0;
let rounds = 0;
function playRound(playerSelection, computerSelection) {
  let playerLower = playerSelection.toLowerCase();
  let cpuLower = computerSelection.toLowerCase();
  if(playerSelection === computerSelection) {
    rounds++;
    return 'It\'s a tie. Both you and the computer chose ' + cpuLower + '.';
    
  } else if((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
          (playerSelection === 'Paper' && computerSelection === 'Rock') ||
          (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    playerWins++;
    rounds++;
    return 'You win! You chose \"' + playerLower + '\" and the computer chose \"' + cpuLower + '.';
  } else if((playerSelection === 'Rock' && computerSelection === 'Paper') ||
          (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
          (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
    cpuWins++;
    rounds++;
    return 'You lose... You chose ' + playerLower + ' and the computer chose ' + cpuLower + '.';
  } else {
    return 'You didn\'t choose rock, paper, or scissors. Or you made a typo.'
  }
}
function rpsImage() {
  document.getElementsByClassName("player-choice")[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtZhQB9qDQgJfBt_DOxaHFX1tIhnMSSbeEw&usqp=CAU"

}
