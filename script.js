'use strict';

const randomNumber = 1 + parseInt(Math.random() * 19);
let score = 20;
let highscore = 0;
console.log(randomNumber)





function guessNumber() {
    Number(document.querySelector('.guess').value)
    console.log(document.querySelector('.guess').value)
    Game()
}


function Game() {
    if (document.querySelector('.guess').value > 20 || document.querySelector('.guess').value < 1)
        document.querySelector('.message').textContent = "Are you a stupid, its bettwen 1-20"
    else {
        if (randomNumber == Number(document.querySelector('.guess').value)) {
            document.querySelector('.message').textContent = "winner"
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = document.querySelector('.guess').value
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        if (score == 0) {
            document.querySelector('.message').textContent = "losser!"

        }
        else {
            if (randomNumber < Number(document.querySelector('.guess').value)) {
                document.querySelector('.message').textContent = "too high";
                score--;
                document.querySelector('.score').textContent = score;

            }
            if (randomNumber > Number(document.querySelector('.guess').value)) {
                document.querySelector('.message').textContent = "too low";
                score--;
                document.querySelector('.score').textContent = score;

            }
        }
    }
}
function newGame() {
    score = 20;
    document.querySelector('.message').textContent = "Starting Guessing"
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?"
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = "";

}

document.querySelector('.check').addEventListener('click', guessNumber)
document.querySelector('.again').addEventListener('click', newGame)

