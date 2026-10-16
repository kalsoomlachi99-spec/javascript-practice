// Number Guessing Game

let maxNum = prompt("Please enter your max number");
maxNum = Number(maxNum);

let random = Math.floor(Math.random() * maxNum) + 1;
let guess = prompt("Please enter your guess");

while (true) {
    if (guess == "quit") {
        console.log("You quit");
        break;
    }
    if (guess == random){
        console.log("you guess right! Congrats!!");
        break;
    } else if (guess > random) {
        guess = prompt("You guess too large Number please guess again");
    } else {
        guess = prompt("You guess too small Number please guess again");
    }
}
