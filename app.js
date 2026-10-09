// Good string

let str = "airplane";

if ((str[0] === 'a') && (str.length >= 3)) {
    console.log(`${str} is a good string.`);
} else {
    console.log (`${str} isn't a good string.`);
}

// Alert message
alert("Unsafe!");

// Error message
console.error("This is an error message.");

// warning message
console.warn("This is a warn message.");

// Prompts
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let msg = "Welcome" + firstName + lastName + "!";
console.log(msg);

// String Methods
//  1.trim() - remove white spaces from start and end
let password = prompt("Enter your password");
console.log(password.trim()); 
