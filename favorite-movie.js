// Favorite movie guessing game

const favMovie = "avator";
let guess = prompt("Please enter your guess");

while (guess != favMovie ){
    if (guess != "quit"){
        console.log("you quit.");
        break;
    }
    guess = prompt("Wrong guess! try again")
}

if (guess == favMovie){
    console.log("Congrats!!");
} 
