/** @format */

function rect(l, w, callback) {
	if (l <= 0 || w <= 0) {
		callback(new Error("Dimensions must be greater than 0"), null);
	} else {
		let result = {
			perimeter: 2 * (l + w),
			area: l * w,
		};
		callback(null, result);
	}
}
module.exports = { rect };
