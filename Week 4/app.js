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

/*
2 Fundamental Problems with Async Callbacks
1) Readability Issues(Nested-Functions)
2) No Centralized Error Handling
*/

const fs = require("fs");
fs.readFile("file1.txt", "utf-8", (err, data1) => {
	if (err) {
		console.log(err);
	} else {
		fs.readFile(data1, "utf-8", (err, data2) => {
			if (err) {
				console.log(err);
			} else {
				fs.readFile(data2, "utf-8", (err, data3) => {
					if (err) {
						console.log(err);
					} else {
						fs.readFile(data3, "utf-8", (err, data4) => {
							if (err) {
								console.log(err);
							} else {
								console.log(data4);
								console.log(data1);
								console.log(data2);
								console.log(data3);
							}
						});
					}
				});
			}
		});
	}
});
