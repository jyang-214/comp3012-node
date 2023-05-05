/** @format */

// /** @format */

// function calc(n1, n2, cb) {
// 	return cb(n1, n2);
// }

// function add(n1, n2) {
// 	return n1 + n2;
// }

// console.log(calc(5, 5, add));

const fs = require("fs");
const content = fs.readFile("hi.txt", (err, data) => {
	if (err) {
		console.log(err);
	}
	console.log(data);
});
