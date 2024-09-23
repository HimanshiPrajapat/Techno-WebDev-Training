// JavaScript Array Methods Assignment
// 1. Write a JavaScript program that uses the `push()` method to add an element to an array.

let arr=[10,20,30,40,50];
arr.push(60);
console.log(arr);

// 2. Create a JavaScript program that removes the last element from an array using the `pop()` method.

arr.pop();
console.log(arr)

// 3. Use the `shift()` method to remove the first element from an array.

arr.shift()
console.log(arr)

// 4. Write a program that adds an element to the beginning of an array using the `unshift()` method.

arr.unshift(10)
console.log(arr)

// 5. Modify an array by removing and/or adding elements using the `splice()` method.
//note:Remove elements: Use splice(start, deleteCount).
//Add elements: Use splice(start, 0, item1, item2, ...).
// Replace elements: Use splice(start, deleteCount, item1, item2, ...).
arr.splice(0,0,10,20,30,40,50)  //adding elements at beginning
console.log(arr)

// 6. Use the `slice()` method to create a new array from a portion of an existing array.

let arr1=arr.slice(3,6)
console.log(arr1)

// 7. Find the index of an element in an array using the `indexOf()` method.

console.log(arr.indexOf(40))

// 8. Create a new array by transforming each element in an existing array using the `map()` method.

let newarr = arr.map((item,i)=>{
       return item*i
      })
      console.log(newarr)

// 9. Filter elements from an array that meet a certain condition using the `filter()` method.

let filterarr= arr.filter((item)=>(item<=20));
console.log(filterarr)

// 10. Write a program that calculates a single value from an array using the `reduce()` method.

let reducearr = arr.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
})
console.log(reducearr)