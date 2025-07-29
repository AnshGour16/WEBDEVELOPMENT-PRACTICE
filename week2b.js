// function hello(){
//     console.log("hi");
// }
// setTimeout(hello,2000);
// console.log("world");
//callbacks
//Apna college 
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,4,sum);

//callbackhell:-nested callbacks stacked below
//one another forming a pyramid structure .
//(pyramid of doom) 
//This style of programming becomes difficult to understand 
//and manage 


// function getData(dataId, getnextData) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//         if (getnextData) {
//             getnextData();
//         }
//     }, 2000);

//     });
// }

// // nested callbackhell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5);
//             })
//         });
//     });
// });


// to overcome the problem of callbacks we use promises 
//promises is for "eventual" completion of task.it is an object in js
//it is a solution to callbackhell.

//let promise=new Promise(resolve,reject)=>{.....})
//function with 2 handlers

//resolve and reject are callbacks provided by js


// let promise=new Promise((resolve,reject)=>{
//     console.log("I am promise");
// });


// function getData(dataId, getnextData) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//         if (getnextData) {
//             getnextData();
//         }
//     }, 2000);

//     });
// }


//we use promise.then() when promise is fulfilled
// and promise.catch() when promised is not fulfilled


// const getPromise=()=>{
//  return new Promise((resolve,reject)=>{
//    console.log("I am promise");
//    resolve("success");
// });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// })

// promise.catch((err)=>{
//     console.log("rejected",err);
// });



//promises chaining
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 2000)
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 2000)
//     });
// }
// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("success", res);
//     console.log("fetching data2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log("success", res);
//     });

// });



//async and await 
//async func always returns a promise.
//async function myFunc(){.....}

//await pauses the execution of its surrounding async function until the 
//promise is settled


function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("weather data");
         resolve(200);
        },2000);
    });
}

//IIFE 
(async function (){
    await api();
    await api();
    await api();
})();



//IIFE-immediatiely invoked function expression
//IIFE is a function that is called immediately 
//as soon as it is defined 



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1 to 7): ", function (dayNumber) {
    dayNumber = parseInt(dayNumber);

    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number. Please enter a number from 1 to 7.");
    }

    rl.close();
});



