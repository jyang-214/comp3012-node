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
	console.log("Callback function has been invoked.");
	if (err) {
		console.log(err.message);
	}
});
console.log("I was called");
