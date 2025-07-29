// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     print() {
//         console.log("color is "+this.color);
//     }
// }

// const rect = new Rectangle(2, 4, 'blue');
// const area = rect.area();
// console.log(area);        
// rect.print();             

// instance is equal to the object of the class 
// const now =new Date();
// console.log(now);


// const map=new Map();
// map.set('name','harry');
// map.set('age',30);
// console.log(map.get('name'));
// console.log(map.get('age'));


//Promise class
// function logName(){
//     console.log("hi");
// }
// setTimeout(logName,1000); // it promises logName function that it will console after 1 sec

// function promisecallback(resolve){
//     setTimeout(resolve,3000);
// }
// promisecallback(function(){
//     console.log("hi");
// });

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms)); 
// }


// function callback(){
//     console.log("3 sec has passed");
// }
// setTimeoutPromisified(3000).then(callback);


// function waitfor3s(resolve){
//     setTimeout(resolve,3000); //resolve=main
// }


// function setTimeoutPromisified(){
//     return new Promise(waitfor3s) 
// }



// function main(){
//     console.log("main is called");
// }

// setTimeoutPromisified().then(main);



// function random(resolve){
//    setTimeout(resolve,3000);
// }
// let p=new Promise(random);
// function callback(){
//     console.log("Promise succeded");
// }
// p.then(callback);


// const fs=require("fs");
// function readFile(fileName){
//     return new Promise();
// }


// const p=readFile("week1a-website.css");
// function callback(contents){
//     console.log(contents);
// }



// p.then(callback);

/*let arr = [10,100,20,30];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);
*/

let arr = [10, 100, 20, 30];
arr.push(200);
arr.pop();
arr.unshift(5);
arr.shift();
arr.slice(1, 3); 
arr.splice(1, 2); 
console.log(arr);