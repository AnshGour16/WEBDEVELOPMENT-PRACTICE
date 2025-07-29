//js is:-interpreted language means it executed line by line at run time 
//by javascript engine 
// js is not bound to specific data type ..dynamically typed 
// single threaded environment -it use one cpu/core at one time for particular task
// js automatically manages memory allocation and deallocation through
//garbage collection 

//variables 
let firstname = "Ansh";
const age = 30;
var isstudent = true;
console.log("firstname"); // it prints the whch is present in double commas not 
//which is storing in firstname
console.log(age);
console.log(isstudent);

const b = 95;
//b=true; // we cant do typecast as we 
//use const make your code strictness 
console.log(b);


//Data types
let number = 42; //number 
let string = "hello world " //string 
let isactive = false; //boolean
let numbers = [1, 2, 3]; //array


let users = ["Noor", "Ansh"];
console.log(users[0]);

//operators
let sum = 10 + 5;
console.log(sum);
let isequal = (10 == 10);
console.log(isequal);

let ag = 15;
let canvote = (ag > 18);
console.log(canvote);


function greet(name) {
    return "Hello " + name;
}
let ans = greet("Noor");
console.log(ans)


// assignment1
function add(a, b) {
    let totalsum = a + b;
    return totalsum;
}
let op = add(1, 2);
console.log(op);


function vote(age) {
    let canvote = age > 18;
    if (canvote) {
        console.log("Can vote")
    }
    else {
        console.log("Cant vote");
    }
}

let final = vote(1);


//loops 
let students = ["a", "b", "c", "d"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


//objects in js
// an object in js is collection of key-value pairs 
// where each key is a string and each value can be any valid js dat type 
//including other object 

function greet(user) {
    console.log("hi " + user.fname + "your age is " + user.age + "your gender is " + user.gender);
}
let user = {
    fname: "Ansh",
    age: 20,
    gender: "male",
}
greet(user);


// array of objects 

let arr = ["ap", "cd", {
    fname: "harkirat",
    age: 20,
    gender: "male",
}]
console.log(arr[2]);

//assignment
function solve(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].gender == "male" && arr[i].age > 18) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

const users10 = [
    { fname: "harry", age: 20, gender: "male" },
    { fname: "rohit", age: 18, gender: "male" }
];

const result = solve(users10);
console.log(result);

