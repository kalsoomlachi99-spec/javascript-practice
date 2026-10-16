// Object Literals

const student = { // object creation
    name: "Kalsoom",
    age: 19,
    marks: 99.99,
    city: "Kohat"
};

console.log(student.marks); // get value
student.marks = 100; // update value
student.religion = "Islam"; // add value
delete(student.age); // delete value

console.log(student);
