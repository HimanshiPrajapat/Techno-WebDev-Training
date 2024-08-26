// console.log(a);
// console.log(sum());
// // Event Loop , Timers functions , call back hell , Promises  , Async Await , Constructor , Classes

// var a = 20;
// let b = 1000;


// function sum(){
//     let x = 200;
//     let y = 300;
//     function add(){
//         return x + y;
//     }
//     return add();
// }

// let sum = function(){
//     let x = 200;
//     let y = 300;
//     function add(){
//         return x + y;
//     }
//     return add();
// }

// let c = 100;

// console.log(a , b ,c);

// sum();

// Timers functions  - setTimeout, setInterval
// let timeout=setTimeout(()=>{
//     console.log("Hello World")
// },5000)  //

// let interval=setInterval(()=>{
//     console.log(Math.random())
// },2000)

// //stop setInterval
// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Stop button clicked")
//     clearInterval(interval)
// })

// document.getElementById("timeout").addEventListener("click",function(){
//     console.log("Stop timeout button clicked")
//     clearTimeout(timeout)
// })

//Asynchronous js - we don't know which function will execute when - usedwhen extracting data from external server
// let a=20;
// let b=30;
// console.log(a+b);
// setTimeout(()=>{                   //js working behind  //function first goes in worker thread and then goes to microtask queue then it send the operation to execute to jsEngine only if js engine executing task is empty
//     console.log("Hello World")
// },0)
// console.log(a);
// setTimeout(()=>{
//     console.log("Second Timeout")
// },1000)
// console.log(b);

// methods to tackel async 
//Promises

//call backs
// function step1(callback){
//     setTimeout(()=>{
//         console.log("Step1 completed");
//         callback();
//     },1000)
// }
// function step2(callback){
//     setTimeout(()=>{
//         console.log("Step2 completed");
//         callback();
//     },1000)
// }
// function step3(callback){
//     setTimeout(()=>{
//         console.log("Step3 completed");
//         callback();
//     },1000)
// }
//This pattern is called Call back hell not feasible for 50or more steps
// step1(()=>{
//     step2(()=>{
//          step3(()=>{
//             console.log("All Steps completed")
//          })
//     })
// })
 //promises - object with multiple tasks (promise state(pending)etc)
 
//  function fetchData(){
//     return new Promise((resolve , reject)=>{
//         let data={
//           Firstname : "Himanshi",
//           Lastname  : "Prajapat"
//         };
//         return resolve(data);
//     }
// )   //cunstructor function which accepts callbacks
// }

// let dataFetched=fetchData();
// console.log(dataFetched)

// function fetchData(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             try{
//                 let data={
//                     Firstname : "Himanshi",
//                     Lastname  : "Prajapat"
//                   };
//                   return resolve(data);
//             }
//             catch(error){
//                 return reject(error);
//             }
            
//         },2000);
//     })   //cunstructor function which accepts callbacks
// }

// let dataFetched=fetchData();
// console.log(dataFetched)

// // promise states-- Pending, fullfill ,reject
// //two method to fetch data from promises
// fetchData
// .then((data)=>{
//     console.log(data)
// })                  //when promise state is fullfill 
// .catch((error)=>{
//     console.log(error)
// })                  //when promise state is reject

//https://fakestoreapi.com/products 
// function fetchProductData(){
//         let data = fetch("https://fakestoreapi.com/products");       //this line can take any amount of time
//         console.log("Next step After Fetching");                    //this is printed evenif data not recieved
//         return data;
// }

// let fetchData= fetchProductData();
// console.log(fetchData);
// fetchProductData
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//    console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// function fetchData(){
//     let data=fetch("https://fakestoreapi.com/products");
//     // console.log("next step after fetching");
//     return data;
// }

// let fetchedData=fetchData(); 
// console.log(fetchedData);

// fetchedData
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log(e);
// })
document.getElementById("product-button").addEventListener("click",function(){
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((item) => {
            console.log(item.image);
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<img style='width : 100px' src=${item.image} alt='Product-Image' ><h3>${item.title}</h3><p>${item.price}</p>`;
            let myDiv = document.getElementById("products");
            myDiv.appendChild(newDiv);
        });
    })
    .catch((error)=>{
        console.log(error);
    })
});