/** @format */

// /** @format */

// // /** @format */

// // function calc(n1, n2, cb) {
// // 	return cb(n1, n2);
// // }

// // function add(n1, n2) {
// // 	return n1 + n2;
// // }

// // console.log(calc(5, 5, add));

// const fs = require("fs");
// fs.readFile("hi.txt", "utf-8", (err, data) => {
// 	if (err) {
// 		console.log(new Error("Filename doesn't exist!"));
// 	} else {
// 		console.log(data);
// 	}
// });

const fs = require("fs");
fs.readFile("file1.txt", "utf-8", (err, data) => {
	if (err) {
		return console.log(err);
	} else {
		fs.readFile(data, "utf-8", (err, data) => {
			if (err) {
				return console.log(err);
			} else {
				fs.readFile(data, "utf-8", (err, data) => {
					if (err) {
						return console.log(err);
					} else {
						fs.readFile(data, "utf-8", (err, data) => {
							if (err) {
								return console.log(err);
							} else {
								console.log(data);
							}
						});
						console.log(data);
					}
				});
				console.log(data);
			}
		});
		console.log(data);
	}
});
