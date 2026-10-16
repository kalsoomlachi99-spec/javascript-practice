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

// nested objects

const classStudents = {
    kalsoom: {
        marks: 98,
        grade: "O",
        subject: "computer science",
        city: "makkah"
    },
    sawaira: {
        marks: 89,
        grade: "A",
        subject: "economics",
        city: "karachi"
    },
    ujala: {
        marks: 78,
        grade: "B",
        subject: "AI",
        city: "alizai"
    }, 
    mubsira: {
        marks: 98,
        grade: "A",
        subject: "statics",
        city: "kohat"
    }
};

console.log (classStudents);
