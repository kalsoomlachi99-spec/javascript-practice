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
let msg = "Welcome " + firstName+ " " + lastName + "!";
console.log(msg);

// String Methods
//  1.trim() - remove white spaces from start and end
let password = prompt("Enter your password");
console.log(password.trim()); 


// 2.toUpperCase
let userName = "Kalsoom";
console.log(userName.toUpperCase());

// 3.toLowerCase
console.log(userName.toLowerCase());

// 4.indexOf
let strg = "ILoveCoding";
console.log(strg.indexOf("Love"));

// Method chaining
let metChn = "    Hello World!   ";
console.log(metChn.trim().toUpperCase());

// slice
console.log(metChn.trim().slice(1 , 5));

// replace, repeat
console.log(metChn.replace("Hello", "Hi").repeat(3));

// arrays
let months = ["January", "July", "March", "August"];
console.log("before method: ", months);
months.shift(); // delete from start
months.unshift("June"); // add at start
months.pop(); // delete from end
months.push("December"); // add at end
console.log("after method: ", months);

// indexof - return index of desired element
console.log(months.indexOf("July"));

// includes - return bool answer 
console.log(months.includes("March"));

// slice(st, end) - return a piece of array
console.log(months.slice());
console.log(months.slice(2));
console.log(months.slice(1, 4));
console.log(months.slice(-2));

// reverse 
console.log(months.reverse());

// splice(st, count of delete, N iterms add)
console.log(months.splice(0, 1, "September"));
  
// sort - first convert array in to string then sort it therefore it doesn't apply on numbers
console.log(months.sort());