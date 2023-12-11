'use strict';

let secretNumber, currentScore, message;
let highScore = 0;

const currentScoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const messageElement = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', handleCheckClick);
document.querySelector('.again').addEventListener('click', initializeGame);
initializeGame();

function initializeGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  message = 'Chuta um número...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  updateUI();
}

function handleCheckClick() {
  const guess = Number(document.querySelector('.guess').value);

  if (!isValidInput(guess)) {
    message = '⛔️ Aí não!⛔️';
  } else {
    evaluateGuess(guess);
  }
  updateUI();
}

function isValidInput(guess) {
  return typeof guess === 'number' && !isNaN(guess) && guess >= 1 && guess <= 20;
}

function evaluateGuess(guess) {
  if (secretNumber > guess) {
    message = 'Maaaaais...';
    currentScore--;
  } else if (secretNumber < guess) {
    message = 'meeeeenos...';
    currentScore--;
  } else {
    message = '🎉 Acertou miserávi!!!';
    if (currentScore > highScore) {
      highScore = currentScore;
    }
    highScoreElement.textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
  }

  if (currentScore === 0) {
    message = '💀 Perdeeeeeu playboy!';
  }
}

function updateUI() {
  currentScoreElement.textContent = currentScore;
  messageElement.textContent = message;
}
