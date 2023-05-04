/** @format */

// consumer.js

const myModule = require("./problem2bModule");

const directory = ".";
const extension = "js";

myModule(directory, extension, function (err, data) {
	if (err) {
		return console.error(err);
	}

	data.forEach((file) => console.log(file));
});
