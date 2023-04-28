/** @format */

// Tasks:
// - IO-Bound Tasks:
//                  - Disk
//                  - Database
//                  - Neetwork
// - CPU-Bound Tasks:
//                  - Image Processing
//                  - Video Editing
//                  - Most functions in the machine learning space

const fs = require("fs");
fs.writeFile("bcit.txt", "hi", (err) => {
	// writeFile is an asynchronous funciton
	if (err) {
		console.log(err.message);
	} else {
		console.log("Done!");
	}
});
console.log("I was called");
