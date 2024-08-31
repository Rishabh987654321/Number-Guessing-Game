let randomNumber, attemptsLeft;

//function to initialize game and we can have any guess in between 100
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    document.getElementById('feedback').textContent = 'Make your guess!';
    document.getElementById('attempts').textContent = `You have ${attemptsLeft} Chances`;
    document.getElementById('user-guess').value = '';
}

//this function check the guess if its right or wrong
function checkGuess() {
    const userGuess = parseInt(document.getElementById('user-guess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('feedback').textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attemptsLeft--;//if the guess is wrong them decrease the attempt

    //if the number is guessed correct by the user then game over
    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = `Correct! The number was ${randomNumber}.`;
        document.getElementById('attempts').textContent = `You guessed it in ${5 - attemptsLeft} attempts!`;
        disableInput();
    } else if (userGuess < randomNumber) {//display your number is too low if guessed number is too low
        document.getElementById('feedback').textContent = 'Your number is too low.';
    } else {
        document.getElementById('feedback').textContent = 'Your number is too high.';
    }

    document.getElementById('attempts').textContent = `You have ${attemptsLeft} Chances`;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        document.getElementById('feedback').textContent = `Game Over! The number was ${randomNumber}.`;
        disableInput();
    }
}

function disableInput() {
    document.getElementById('check-btn').disabled = true;
    document.getElementById('user-guess').disabled = true;
}
//additionally i have also added a feature in which we can restart the game if we want to play again
function restartGame() {
    document.getElementById('check-btn').disabled = false;
    document.getElementById('user-guess').disabled = false;
    initializeGame();
}

document.getElementById('check-btn').addEventListener('click', checkGuess);
document.getElementById('restart-btn').addEventListener('click', restartGame);

initializeGame();
