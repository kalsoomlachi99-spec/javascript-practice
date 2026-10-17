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
    let ave = (a + b + c) / 3;
    console.log (ave);
}

calcAverage (1, 2, 3);

// return sum of n numbers
function getSum (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    } 
    return sum;
}

console.log(getSum(3));
 
// concatenation of all strings
function concat (str) {
    let result = "";
    for (let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}
let str = ["hi ", "hello ", "bye ", "!"];
console.log (concat(str));

// Scope
let greet = "Hello!"; // global scope

function changeGreet () {
    let greet = "Assalam-o-alikum"; // function scope
    console.log (greet);   

    function innerGreet () {
        console.log (greet); // lexical scope
    }
    innerGreet();
}

console.log (greet);   
changeGreet();
