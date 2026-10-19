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

rollDice();

// Functions with argument

// print sum
function sum(a, b) {
  console.log(a + b);
}

sum(4, 3);

// print info
function printInfo(name, age) {
  console.log(`${name}'s age is ${age}`);
}

printInfo("kalsoom", 19);

// average of 3 numberes
function calcAverage(a, b, c) {
  let ave = (a + b + c) / 3;
  console.log(ave);
}

calcAverage(1, 2, 3);

// return sum of n numbers
function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(3));

// concatenation of all strings
function concat(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
let str = ["hi ", "hello ", "bye ", "!"];
console.log(concat(str));

// Scope
let greet = "Hello!"; // global scope

function changeGreet() {
  let greet = "Assalam-o-alikum"; // function scope
  console.log(greet);

  function innerGreet() {
    console.log(greet); // lexical scope
  }
  innerGreet();
}

console.log(greet);
changeGreet();

// Higher Order Function | function as argument + function in return

// take function as argument
function multipleGreet(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

let salam = function () {
  console.log("Assalamoalikum");
};

multipleGreet(salam, 3);

// returns a function

function oddEvenFactory(request) {
  if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else {
    return "Wrong request";
  }
}

// Methods | Function inside an object or Function as a value of object's key

const calculator = {
  // method 1
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

const calcu = {
  // method 2
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};

// "this" keyword | refers to the object which call it
const student = {
  name: "kalsoom",
  age: 19,
  eng: 99,
  phy: 97,
  math: 98,
  getAve() {
    console.log((this.eng + this.phy + this.math) / 3);
  },
};

// try and catch pair
try {
  console.log(a);
} catch (err) {
  console.log("a is not defined");
  console.log(err);
}

// arrow function
const pow = (a, b) => {
  console.log(a ** b);
};

const cube = (n) => {
  console.log(n * n * n);
};

// Implicit Return in Arrow Function
const sqr = (n) => n * n;

// Set timeOut function
console.log("hi there!");
setTimeout(() => {
  console.log("Manal");
}, 3000);
console.log("Salam from");

// Set interval function | execute function after given interval of time | use "clearInterval(id)"  to stop execution
let id = setInterval(() => {
  console.log("kalsoom");
}, 4000);
console.log(id);
setTimeout(() => {
  clearInterval(id);
}, 10000);

// this with arrow function
const stu = {
  name: "kalsoom",
  marks: 97,
  getname: function () {
    console.log(this); // calling object's scope -> stu
    return this.name;
  },
  getmarks: () => {
    console.log(this); // parent's scope (lexical scope) -> window
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(function () {
      console.log(this); // window
    }, 3000);
  },
  getInfo2: function () {
    setTimeout(() => {
      console.log(this); // stu
    }, 3000);
  },
};

// Arrow function that return square of number 'n'
const sqrOfN = (n) => n * n;

// Function print "Hello World!" 5 times at interval of 2s each
let id3 = setInterval(() => {
  console.log("Hello World!");
}, 2000);

setTimeout(() => {
  clearInterval(id3);
  console.log("clear interval ran");
}, 10000);

// Array Mehtods
const arr = [
  {
    name: "Kalsoom",
    marks: 899,
  },
  {
    name: "Ujala",
    marks: 736,
  },
  {
    name: "Malaika",
    marks: 852,
  },
];

arr.forEach((student) => {
  // execute every element of array
  console.log(student.name);
});
