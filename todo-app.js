// ToDo App

let todo = [];
let req = prompt("Please enter your request");

while (true) {
    if (req == "quit"){
        console.log("App quiting..");
        break;
    }

    if (req == "list"){
        console.log("--------------");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------------");
    } 
    else if (req == "add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    } 
    else if (req == "delete"){
        let indx = prompt("Enter the index of task you want to delete");
        todo.splice(indx, 1);
        console.log("Task deleted");
    } 
    else {
        console.log("Wrong request");
    }
    req = prompt("Please enter your request");
}
