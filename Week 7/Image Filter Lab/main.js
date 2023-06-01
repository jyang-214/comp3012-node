const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date: May 31, 2023
 * Author: Jacky (Chieh Chi) Yang
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

IOhandler.unzip(zipFilePath, pathUnzipped)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

IOhandler.readDir(pathUnzipped)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

IOhandler.grayScale(pathUnzipped, pathProcessed)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
