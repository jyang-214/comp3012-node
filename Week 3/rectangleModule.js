/**
 * Create a function called solveRect
 * It takes 2 parameters:
 * L and W
 *
 * The function should call another function that you have defined in another file called rect
 *
 * rect is a function containing 3 parameters: L, W, Callback
 *
 * If the L or W that the user passes is less than or equal to 0, call the callback function with an error message.
 * Otherwise...call the callback function with null for the error and for the result, an object containing the area and the perimeter.
 * @format
 */
function rect(l, w, callback) {
	// Your Logic should go here
	if (l <= 0 || w <= 0) {
		callback(new Error("Dimensions must be greater than 0."));
	} else {
		const perim = 2 * l + 2 * w;
		const area = l * w;
		const result = { perimeter: perim, area: area };
		callback(null, result);
	}
}

module.exports = { rect };
