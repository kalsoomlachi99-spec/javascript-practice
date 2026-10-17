// Functions

// print poem
function printPoem() {
    console.log("Twinkle Twinkle little star");
    console.log("How i wonder what you are");
    console.log("Up above the word so high");
    console.log("Like a diamond in the sky");
    console.log("Twinkle Twinkle little star");
    console.log("How i wonder what you are");
}

printPoem();

// roll dice 
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice ();

// Functions with argument

// print sum
function sum (a , b) {
    console.log(a + b);
}

sum (4, 3);

// print info
function printInfo (name, age) {
    console.log (`${name}'s age is ${age}`);
}

printInfo("kalsoom", 19);

// average of 3 numberes
function calcAverage (a, b, c) {
    console.log ((a + b + c) / 3);
}

calcAverage (1, 2, 3);
