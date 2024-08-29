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
// )   //constructor function which accepts callbacks
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
// document.getElementById("product-button").addEventListener("click",function(){
//     fetch("https://fakestoreapi.com/products")
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.forEach((item) => {
//             console.log(item.image);
//             let newDiv = document.createElement("div");
//             newDiv.innerHTML = `<img style='width : 100px' src=${item.image} alt='Product-Image' ><h3>${item.title}</h3><p>${item.price}</p>`;
//             let myDiv = document.getElementById("products");
//             myDiv.appendChild(newDiv);
//         });
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// });

// ----------------------------------------------------------------Day-8 --------------------------------------------------------------------------------------------

//Async Await    //this below code will work asynchronously
// async function fetchUserData(){
//      try{
//         let response= await fetchData()          //wait till data is not fetched
//      console.log(response);
//      }
//      catch(error){
//         console.log(error);
//      }
// }
// fetchUserData();

//This -globally print then gives blank object in node and window object in browser  or printed in function gives reference of that function
// let user ={
//     username: "Himanshi",
//     age: "20",
//     getUserDetails : function(){
//         console.log(`Hello, My username is ${this.username} and My age is ${this.age}`);
//         console.log(this)
//     }
// }
// console.log(this)
// user.getUserDetails();

//constructor - functions which forms an object and works as classes (there are no classes)
//constructor function  --function first latier is always capital
//not right way to create constructor
// function Person(name,age){
//     const personobj = {
//           username:name,
//           age:age,
//           greet: function(){
//             console.log(`Hello, My username is ${this.username} and My age is ${this.age}`);  // this is called template string 
//           }
//     }
//     return personobj;
// }
// const person1= Person("Himanshi","20")
// const person2= Person("Karan","40")
// person1.greet();
// person2.greet();

//Right way
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     // this.greet = function(){
//     //                 console.log(`Hello, My username is ${this.name} and My age is ${this.age}`);  // this is called template string 
//     // }
// }
// Person.prototype.greet=function(){
//                     console.log(`Hello, My username is ${this.name} and My age is ${this.age}`);  // this is called template string 
//     }
// const person1= new Person("Himanshi","20")
// const person2= new Person("Karan","40")
// console.log(person1)
// console.log(person2)
// person1.greet();
// person2.greet();

//classes
class Person{
    constructor(name,age){
             this.name=name;
             this.age = age;
}
greet(){
    console.log(`Hello, My username is ${this.name} and My age is ${this.age}`)
}
}
const person1= new Person("Jatin","55");
console.log(person1)


//Inheritance concept
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes noise`);
    }
}
class Dog extends Animal{
    constructor(name){
        super(Animal)
        this.name=name;
    }
    speak(){
        console.log(`${this.name} barks`);  //function overridding
    }
}
const Dogobj = new Dog("Dog");
console.log(Dogobj);
class Cat extends Animal{
    
    constructor(name){
        super(Animal)
        this.name=name;
    }
    speak(){
        console.log(`${this.name} meows`);  //function overridding
    }
}

const Catobj = new Cat("Cat");
console.log(Catobj);
Dogobj.speak();
Catobj.speak();

// class BankAccount{
//      balance=0;
//     constructor(Bankname,Amount){
//         this.Bankname=Bankname;
//         this.balance+=Amount;
//     }
//     BankStatus(){
//         console.log(`Your BankAccount is in ${this.Bankname} with a balance of ${this.balance}`)
//     }
// }
// const Bankinfo1=new BankAccount("State Bank of India",4500);
// console.log(Bankinfo1);
// Bankinfo1.BankStatus();
// const Bankinfo2=new BankAccount("ICICI",3000);
// console.log(Bankinfo2);
// Bankinfo2.BankStatus();

class BankAccount{
        #balance = 0;
    
        constructor(owner){
            this.owner = owner;
        }
    
        deposit(amount){
            this.#balance += amount;
            console.log(`${this.owner} deposited ${amount} , Current Balance : ${this.#balance}`)
        }
    }
    const Bankinfo1=new BankAccount("Krishna Gupta");
    console.log(Bankinfo1)
    Bankinfo1.deposit(10000)
    const Bankinfo2=new BankAccount("Pavan Jain");
    console.log(Bankinfo2)
    Bankinfo1.deposit(1000)
