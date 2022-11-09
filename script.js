'use strict';

// Get the check button element
const checkButton = document.querySelector('.check');

// Get the again button for starting new game
const againButton = document.querySelector('.again');

// Generate secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Score tries = 20
let score = 20;
let highScore = 0;

// Set message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Reset settings on new game
const resetSettings = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
};

// Attach an event listener
checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Case if no input inserted
  if (!guess) {
    displayMessage('🚫 No number!');
  } else if (guess === secretNumber) {
    // Guess is correct player wins
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    //  Change some css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Attach an event listener for refreshing the page
againButton.addEventListener('click', resetSettings);
