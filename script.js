'use strict';

let secretNumber, currentScore, message;
let highScore = 0;

//DOM elements
const currentScoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');

//event listeners
document.querySelector('.again').addEventListener('click', initializeGame);
document.querySelector('.check').addEventListener('click', handleCheckClick);
initializeGame();

function initializeGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  message = 'Chuta um número...';
  numberElement.textContent = '?';
  numberElement.style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
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
  if (secretNumber === guess) {
    message = '🎉 Acertou miserávi!!!';
    if (currentScore > highScore) {
      highScore = currentScore;
    }
    highScoreElement.textContent = highScore;
    numberElement.textContent = secretNumber;
    numberElement.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60B347';
  } else {
    secretNumber > guess ? wrongGuess('Maaaais!') : wrongGuess('Meeeeenos!');
  }
}

function updateUI() {
  currentScoreElement.textContent = currentScore;
  messageElement.textContent = message;
}

function wrongGuess(msg) {
  currentScore--;
  if (currentScore === 0) {
    message = '💀 Perdeeeeeu playboy!';
    numberElement.textContent = secretNumber;
    numberElement.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#c05746';
  } else {
    message = msg;
  }
}
