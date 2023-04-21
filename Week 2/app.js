
// Function Declaration Syntax
add(5, 4);      // Hoisting 
                // Will bring the function declaration to the top of the file
function add(num1, num2) {
    return num1 + num2;
}

// Funciton Expression Syntax
// No Hoisting
const add = function(num1, num2) {
    return num1 + num2;
}

// Arrow Function Syntax
