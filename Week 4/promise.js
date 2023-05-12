/** @format */

// /** @format */

// const fs = require("fs");

// fs.writeFile("hi.txt", "hi", (err) => {
// 	if (err) {
// 		return console.log(err);
// 	}
// 	fs.readFile("hi.txt", "utf-8", (err, data) => {
// 		if (err) {
// 			return console.log(err);
// 		}
// 		console.log(data);
// 	});
// });

// With Promises
const fs = require("fs");
function writeFileP(filename, data) {
	return new Promise((resolve, reject) => {
		// default value is pending and undefined
		fs.writeFile(filename, data, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

function readFileP(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, "utf-8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

writeFileP("hi.txt", "hi") // status is pending here.
	.then(() => {
		// status is fulfilled
		readFileP("hi.txt").then((data) => {
			console.log(data);
		});
	})
	.catch((err) => {
		// status is rejected
		console.log(err);
	});
