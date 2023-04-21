// // Javascript Review

// // Function Declaration Syntax
// add(5, 4); // Hoisting
// // Will bring the function declaration to the top of the file
// function add(num1, num2) {
//   return num1 + num2;
// }

// // Funciton Expression Syntax
// // No Hoisting
// const add = function (num1, num2) {
//   return num1 + num2;
// };

// // Arrow Function Syntax
// // No Hoisting
// const add = (num1, num2) => {
//   return num1 + num2;
// };

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(add(5, 4));

// // Indirectly Call the function
// const referenceOne = add;
// const referenceTwo = add;
// referenceOne(5, 2);
// referenceTwo(5, 3);

// Primitive Data: Number, String, Boolean, undefined is always going to create a copy
// Complex Data: Funcitons, Arrays, Objects are always going to create a reference

// const addTwo = (num1, callback) => {
//   // addTwo is a Higher Order Function
//   return callback(num1, 2); // callback is a callback function
// };
// addTwo(7, add);

// // [1, 2, 3, 4].map( (n) => n*5 );
// // ["red", "green"].map( (c) => c.length);
// const arr = [1, 2, 3];
// const cb = (n) => {
//   return n * 2;
// };

// const cb1 = (v, i , arr) => {
//     const result = [];
//     arr.forEach((element, index) => {
//         result.push(element + 2);
//     });
// }

// const map = (arr, callback) => {
//     return callback(v, i , arr);
// }
// const result = arr.map(cb);
// console.log(result);

// map(arr, cb1);


// CALLBACK FUNCTION
const list = [1, 2, 3];
const map = (arr, callback) => {
  const newArray = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArray.push(callback(element, index, arr));
  }
  return newArray;
};
const cb = (v, i, arr) => {
  return `INDEX: ${i}, VALUE: ${v * 20}`;
};
const result = map(list, cb);
console.log(result);
