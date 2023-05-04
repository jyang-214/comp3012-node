/** @format */

const { rect } = require("./providedRectangleModule");

function solveRect(l, w) {
	rect(l, w, function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
}

solveRect(1, 4);
solveRect(11, 4);
solveRect(1, 48);

// Console Log Below:
// Perimeter is: <> and Area is <>

// solveRect(5, -1);
// Console Log Below:
// Error: Dimensions must
//        be greater than 0
