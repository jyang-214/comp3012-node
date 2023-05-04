/** @format */

const fs = require("fs");
const path = require("path");

const directory = ".";
const extension = ".js";

fs.readdir(directory, (err, files) => {
	if (err) {
		console.error(err);
		return;
	}

	const filteredFiles = files.filter((file) => {
		const ext = path.extname(file).toLowerCase();
		return (
			ext === extension.toLowerCase() ||
			ext === `.${extension.toLowerCase()}`
		);
	});

	filteredFiles.forEach((file) => {
		console.log(file);
	});
});
