//------------------------------------------------------day1-----------------------------------------------------------------------------------------------------
/*console.log("Hello World");
// alert ("Hello techno")

//difference between var, let ,const (why there are three variable defining keywords var was earlier used)
//
var first= 20;
console.log(first)

//data types in js
//premitive type- string,number(for int ,float,double),boolean ,undefined, symbol,bigint
//reference or object type - array,objects,date, null  (note:: datatype always comes out to be object)
 var firstvar=undefined;
 console.log( typeof firstvar)
//undefined data type has type--undefined
 //in case  var firstvar='i'm ready';  shows error that's why we use "" to represent the string <from two types of string('',"")
 //collection of multiple datatypes- is called array 
var data=[20,30,"hello",true,undefined]
console.log( typeof data)

// var date=new Date();  //note :Date -'D' should be capital
// console.log(date);
// console.log(typeof date)

// var obj={
//     firstname: "Himanshi",
//     lastname: "Prajapat"
// }
// console.log(typeof obj)
 //array of object is always given in json format as
 //{(),(),()}

 //Dynamically type means
//  var variable="Hello";
//  variable=[20,30];
//  variable={
//      firstname: "Himanshi",
//         lastname: "Prajapat"
//     }
//     variable=true;
     
//     console.log(typeof variable)

//let doesn't assign the same variable again and again
// let num2= 20;
// let num2= 20;
// variable defined with var can be redeclared or can be reassigned
var num=20;
var num=30;
// variable defined with let cannot be redeclared or can be reassigned

 let num1=40;
 num1="let";
// variable defined with const cannot be redeclared or cannot be reassigned
const num2= 67;
// num2 = 67; show error

//OPERATORS-- 
//arithmetic - +,-,*,/
let a=10;
let b=40;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//string concatination
// let string1="Himanshi";
// let string2=' prajapat';
// console.log(string1+string2)

console.log(5+"3")
console.log("5"-3)//-,*,/ converts string into number and perform operation
let x=6;
x=x+10;
console.log(x)
//NOTE: typeof NaN(not a number)is number  because it represents the idea of an "invalid" number.
let str="him";
let constr=+str;
console.log(typeof str);
console.log(typeof constr);// Here type conversion take place which says the converting string into number gives NaN<invalid number> while.
let y =3;
//y-=3 subtraction assignment operator
//y+=3 addition assignment operator
//y*=3 multipication assignment operator
//y/=3 division assignment operator
//y%=3 remainder assignment operator
y**=3 //exponential assignment operator
console.log(y)

//comparision operator always return boolean value

let c=20;
let d=20;
let e="20";
console.log(c==d)
console.log(c==e);
console.log(c===e); //it also compares datatypes

//logical operators
//AND(&&) OR(||)
let isloggedin=true; //=20 
let isAdmin=true;    //=10 
console.log("Is the user logged in or admin",isloggedin && isAdmin)  //if 0&&num return 0(consider as -ve) if num1&& num2 return num2 
 console.log(10 || 20) //as it only check first value whether it is true or false*/
//------------------------------------------------------------------Day2----------------------------------------------------------------------------

//conditional statements
//if else, switch ,ternary operators
//functions
//array ,object
//Loops

// let count=40;
// if(count==20){
//     console.log("The count is 20");
// }else if(count<20){
//      console.log("The count is less than 20");
// }
// else{
//     console.log("The count is greater than 20");
// }

// use prompt to take input from user
//node doesn't take input it will only take in browser console
// let num=prompt("Enter a number");
//  let username=prompt("Enter Username:");
//  let pw=+prompt("Enter Password:");
//  if(username=="Admin" && pw=="123"){ //or use if(username==="Admin" && pw==="123") without type casting password
//     console.log("Auth Successfull");
//  }else
//  {
//     console.log("Auth Failed");
//  }

//ternary operator
// let count=20;
// count===20 ? console.log("Count is 20") : console.log("Count is not 20")
// let count=10;
// count===20 ? console.log("Count is 20") : count >20 ? console.log("Count is greater than 20"): console.log("Count is less than 20")
// let username=prompt("Enter Username:");
// let pw=+prompt("Enter Password:");
// username=="Admin" && pw=="123" ? console.log("Auth successfull") : console.log("Auth Failed")

// let dayNumber = 3;
// let dayName;
// switch (dayNumber) {
//   case 1:
//     dayName = "Monday";
//   break;
//   case 2:
//     dayName = "Tuesday";
//   break;
//   case 3:
//     dayName = "Wednesday";
//   break;
//   case 4:
//     dayName = "Thrusday";
//   break;
//   case 5:
//     dayName = "Friday";
//   break;
//   case 6:
//     dayName = "Saturday";
//   break;
//   case 7:
//     dayName = "Sunday";
//   break;
//   default:
//     dayName="invalid day number";
// }
// console.log(dayName)
//without break it will execute all cases after the case become true

//Types of defining functions: function declaration ,function expression ,arrow function.
//function declaration 
// function sum(){
//     console.log("calling sum function by function ");
// }
// sum();
//function expression 
// const sum =function(){
//     console.log("calling sum function by function expression");
// }
// sum();
 //arrow function 
// let sum =(a,b)=>{
//     console.log("calling sum function by Arrow function "); //most commonly used
//     return(a+b);
// }
// //or if return is single line the use
// //let sum=(a,b)=>a+b
// let add = sum(5,2);
// console.log(add);

//Scopes in js: earlier global/local or functional scope then block scope (rest all curley braces variable has block scope)came
// var -global scope variable if defined in function act as local never act as block 
// let & const - block scope variable
// {
//     let a =20; //error: a is not defined
// }
// console.log(a);
// {
//     var a =45;  
//     console.log(a);   //let treat ar different variables while var doesn't
// }
// {
//     var a="abc" 
// }
// console.log(a);  //shows himanshi 

//array and object
// let arr=[10,20,50,70,80]
// console.log(arr[arr.length-1]); //accessing last element
// let nestedarr= [ 10,20,30,[1,2,3,4],[30,40,50],["aa","bb",[true,false]]];
// let newarr=nestedarr[nestedarr.length-1]
// let newarr1=newarr[newarr.length-1]     

// console.log(newarr)
// console.log(newarr1[1])  //access the [true,false] last element of nested arr
// console.log(arr.length)
// arr[arr.length]="Himanshi"
// console.log(arr)
// console.log(arr.length)

//objects
// let obj={
//     "Firstname": "Himanshi",      //can be written as variable or string
//     "lastname": "Prajapat"
// }
// console.log(obj.Firstname)
// obj.lastname="jain"
// console.log(obj.lastname)
// obj.section="SID"
// //obj[SID]="12345" //gives the error SID not defined hence we always use key values in square bracket in String only
// obj["SID"]="12345"
// console.log(obj)

// -----------------------------------------------------------------Day3-----------------------------------------------------------------------------------

//loops,strict mode ,console types , array methods
//for ,while ,dowhile
// let count=11;
// while(count<=10)
// {
//   console.log(count)
//   count++
// }
// do{
//   console.log(count)
//   count++
// }while(count<=5);
// for(let i=0;i<=10;i++)
// {
//   console.log(i)
// }

//iterating arr elements
// let arr=[10,20,30,40,50,60,70,80]
// for(let i=0;i<arr.length;i++)
// {
//   console.log(arr[i])
// }

//for of and for in loop
let items=["First","Second",3,4,"Fifth"]
for(let item in items){
  console.log(item)   //print the elements of items by storing each element in item variable
}

for(let index in items){
  console.log(index) //print only index
  console.log(items[index])
}

//strict mode - in which javascript workes strictly following methods
  //globally defining strict mode 
// "use strict";
// b=30;
// let a=20;

// console.log(b)

// function sum(a,a){

//   console.log("Sum function");
// }
// sum();
  
// //Types of console
// console.error("This is an error")
// console.warn("This is a warning")
// console.assert(10>5,"10 is greater than 5")        //gives output when condition is false
// console.assert(5>10,"5 is not greater than 10")

// let person={
//   address:{
//     city:"jaipur",
//     pincode: "313003"
//   },
//   Hobbies:["Riding","Travelling"]
// }

// console.dir(person)

// let data =[
//   {
//     name:"Himanshi",address:"jaipur" ,dept:"FSD"
//   },
//   {
//      name:"Ashi",address:"Udaipur" ,dept:"CSE"
//   },
//   {
//     name:"Pavan",address:"Ajmer" ,dept:"NIC"
//  }
// ]
// console.table(data)

// console.group("Group")
// console.log("Message1")
// console.log("Message2")
// console.groupEnd()

// console.count("Counter");
// console.count("Counter");
// console.count("Counter");

// //array methods
//let arr=[10,20,30,40,50,60,70,80]
// let result = arr.push(1000)    ///always asked in interview about all array method that what its returning(checked by storing it in new var and printing it) and whether it is changing something in an array

// console.log(result)
// console.log(arr)

// console.log(arr.pop())
// console.log(arr)

// console.log(arr.unshift(1000))     //store on 0th element and return arr length
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)

// let arr1=[10,20];
// let arr2=[30,40];
// let result=arr1.concat[arr2];   //do not change arr1,arr2 
// console.log(result)

// let arr=[10,20,30,40,50,60]
// let slicearr=arr.slice(2,5);  // return  the last parameter-1 th element 
// console.log(arr)
// console.log(slicearr)

// // NOTE: push pop splice shift changes the arr 

// console.log(arr.splice(2,2));  
// console.log(arr)
// //add elemnets between arr we use this
// arr.splice(2,2,"Himanshi"); //add himanshi to second index
// console.log(arr);

//includes
// let result= arr.includes(40)  //checks whether the element is present in arr
// console.log(result)


// console.log(arr.reverse())
//used to change the date format from 2.4.24 to 2-4-24
// let result=arr.join("techno")   
// console.log(result)

//for nested arr flat(level) method removes the bracked upto 2 level of nesting
// let arr1=[[10,20],30,[40,[50,60]]]
// let result=arr1.flat(2)  
// console.log(result)
// console.log(arr1)

//(map ,filter)very imp ,reduce
 let arr=[10,20,30,40,50,60,70]
 // syntax: arr.map(()=>{})  <-call back function  
 let newarr = arr.map((item,i)=>{
  return item*i
 })

 console.log(newarr) //length of newarr return by nap method is equal to original arr

 //for each
 arr.forEach(element => {
  // return element        doesn't return anything which is the main deffernce between the map and forEach
  console.log(element)
 });