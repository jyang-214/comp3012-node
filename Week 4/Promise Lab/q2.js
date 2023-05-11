/** @format */

const fs = require("fs");

// Write your Solution Here

fs.readFilePromise = function (fileName) {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, (err, data) => {});
	});
};

fs.readFile("file1.txt", (err, fileTwo) => {
	if (err) {
		return console.log(err);
	}
	fs.readFile(fileTwo, (err, fileThree) => {
		if (err) {
			return console.log(err);
		}
		fs.readFile(fileThree, (err, fileFour) => {
			if (err) {
				return console.log(err);
			}
			fs.readFile(fileFour, "utf8", (err, fileFourResult) => {
				if (err) {
					return console.log(err);
				}
				console.log(`Contents of file4: ${fileFourResult}`);
			});
		});
	});
});
