/** @format */

// module.js

const fs = require("fs");
const path = require("path");

module.exports = function (directory, extension, callback) {
	fs.readdir(directory, (err, files) => {
		if (err) {
			return callback(
				new Error("Directory Invalid. Please enter a valid directory.")
			);
		}

		const filteredFiles = files.filter((file) => {
			const ext = path.extname(file).toLowerCase();
			return (
				ext === extension.toLowerCase() ||
				ext === `.${extension.toLowerCase()}`
			);
		});

		callback(null, filteredFiles);
	});
};
