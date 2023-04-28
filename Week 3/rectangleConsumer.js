/** @format */
/*
solveRect should be here
*/

const { rect } = require("./rectangleModule");

function solveRect(l, w) {
	// Call the fucntion rect here...
	// NO LOGIC...ONLY LOGGING
	rect(l, w, callback);
}

function callback(error, result) {
	if (error) {
		console.log(error);
	} else {
		console.log(
			`Perimeter is: ${result.perimeter} and Area is ${result.area}`
		);
	}
}

solveRect(1, 4);
// console log below
// {perimeter: <sth>, area: <sth>}
// Perimeter is: <> and Area is <>

solveRect(5, -1);
// Console log below:
// Error: Dimensions must be greater than 0

solveRect(11, 4);
