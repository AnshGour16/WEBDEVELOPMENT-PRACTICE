// function sum(a,b){
//     return a+b;
// }
// let ans=sum(2,3);
// console.log(ans);

// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }

// const ans=sum(10);
// console.log(ans);

//synchronous code:-which executed line by line in order its written
//I/O heavy operations:- by doing this we can read write the files
// examples are:-reding a file
//starting a clock
//HTTP requests
//fs is external library file system
// const fs=require("fs");
// const contents=fs.readFileSync("week1-website.html","utf-8");
// console.log(contents);

// const data=fs.readFileSync("week1a-website.css","utf-8");
// console.log(data);
//I/O bound task vs cpu bound task 
//functional arguments:-passing a function to another function as an argument
function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function dooperation(a,b,op){
    return op(a,b);
}
console.log(dooperation(1,2,sum));


//asynchoronusly code,callbacks
const fs=require("fs");
function print(err,data){
    console.log(data);
}

// fs.readFile("week1a-website.js","utf-8",print); 
// fs.readFile("week1a-website.css","utf-8",print);//asynchornously
// console.log("Done");

function timeout(){
    console.log("click the button");
}
console.log("hi");
setTimeout(timeout,1000);
console.log("welcome to the loupe");

let c=0;
for(let i=0;i<100000;i++){
    c=c+1;
}
console.log("expensive operation done");

// I/O Bound	                CPU Bound
// File reading/writing       	Loops, calculations
// Network requests	            Image processing, data sorting
// Database                     Complex math, data compression