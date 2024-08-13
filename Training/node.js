console.log("Hello World");
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
 console.log(10 || 20) //as it only check first value whether it is true or false

