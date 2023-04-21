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

const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 4));

// Indirectly Call the function
const referenceOne = add;
const referenceTwo = add;
console.log(referenceOne(5, 2));
console.log(referenceTwo(5, 3));

// Primitive Data: Number, String, Boolean, undefined is always going to create a copy
// Complex Data: Funcitons, Arrays, Objects are always going to create a reference