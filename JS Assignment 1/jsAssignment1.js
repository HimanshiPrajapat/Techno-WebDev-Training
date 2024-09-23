//Bigenner level javascript Assignment

//Question 1: String Concatenation
let firstname = "Kalyan ";
let lastname = "Jain";
let fullname = firstname + lastname;
console.log(fullname);
//Question 2: If-Else Statements
let a = prompt("Enter a number: ");
if (a > 0) console.log("Positive");
else if (a < 0) console.log("Negative");
else console.log("Zero");

// Function to check if a number is positive, negative, or zero
// function checkNumber(number) {
//     if (number > 0) {
//         console.log("Positive");
//     } else if (number < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }

// // Example usage:
// //let number = prompt("Enter a number:");  // Take input from the user
// number = Number(number);  // Convert the input to a number

// checkNumber(number);

//Question 3: Loops
for (let i = 1; i < 10; i++) {
  console.log(i);
}
//Question 4: Functions
function greet(name) {
  console.log("Hello , " + name);
}
greet("Akshi");
//Question 5: Arrays
let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//javascript Assignment
//Q1 Basic Function:
// Write a function named `sayHello` that takes no parameters and returns the string "Hello, World!".
function sayHello() {
  console.log("Hello, World!");
}
sayHello();

// Q2 Function with Parameters:
// Create a function `doubleNumber` that takes a number as an argument and returns the number multiplied by 2.
// function doubleNumber(num){
//         return num*2
// }
// let result=doubleNumber(10)
// console.log(result)

//3. Simple Return Function:
//Write a function `addTwoNumbers` that accepts two numbers as arguments and returns their sum.
function addTwoNumbers(n1, n2) {
  return n1 + n2;
}
console.log(addTwoNumbers(40, 50));

// 4. Arrow Function:
// Convert the `doubleNumber` function from question 2 into an arrow function.
let doubleNumber = (num) => {
  return num * 2;
};
console.log(doubleNumber(10));

// 5. Arithmetic Operator:
// Create a function `subtractTen` that takes a number as an argument and returns the result of
// subtracting 10 from it.
function subtractTen(num) {
  return num - 10;
}
let result = subtractTen(40);
console.log(result);

// 6. Comparison Operator:
// Write a function `isGreaterThanFive` that takes a number as an argument and returns `true` if the
// number is greater than 5, otherwise `false`.
function isGreaterThanFive(num) {
  if (num > 5) return true;
  else return false;
}
console.log(isGreaterThanFive(-10));

// 7. Logical Operator:
// Write a function `isBetweenOneAndTen` that takes a number as an argument and returns `true` if
// the number is between 1 and 10 (inclusive), otherwise `false`.
function isBetweenOneAndTen(num) {
  if (num >= 1 && num <= 10) return true;
  else return false;
}
console.log(isGreaterThanFive(10));

// 8. If-Else Statement:
// Write a function `isEven` that takes a number as an argument and returns "Even" if the number is
// even, and "Odd" if the number is odd.
function isEven(num) {
  if (num % 2 == 0) return "Even";
  else return "Odd";
}
console.log(isEven(45));
// 9. Ternary Operator:
// Write a function `checkAge` that takes an age as an argument and returns "Adult" if the age is 18
// or above, and "Minor" if the age is below 18. Implement this using the ternary operator.
function checkAge(age) {
  age >= 18 ? console.log("Adult") : console.log("Minor");
}
//checkAge(prompt("Enter Age:"));

// 10. Switch Statement:
// Create a function `getDayType` that takes a number (1-7) as an argument and returns:
// - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
// - "Weekday" if the number is between 1 and 5.
// Use a `switch` statement to implement this logic.
function getDayType(day) {
  switch (day) {
    case 6:
    case 7:
      return "Weekend";
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
    default:
      return "Invalid day"; // Handling any number that isn't between 1 and 7
  }
}

// Example usage:
const day = 6; // You can change this to test different values
const dayType = getDayType(day);
console.log(`Day ${day} is a ${dayType}.`);

// getDayType(prompt("Enter day between 1-7 :"))
