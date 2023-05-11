/** @format */
const fs = require("fs");
let getSpacedData = (fileName) => {
	return new Promise((resolve, reject) => {
		if (typeof fileName !== "string") {
			reject(new Error("fileName invalid."));
		} else {
			fs.readFile(fileName, "utf-8", (err, data) => {
				if (err) {
					reject(err);
				} else {
					const dataArray = data.split(" ");
					const parsedArray = [];
					dataArray.forEach((element) => {
						parsedArray.push(parseInt(element));
					});
					resolve(parsedArray);
				}
			});
		}
	});
};

let filterEvens = (arr) => {
	const resultArray = [];
	arr.forEach((element) => {
		if (element % 2 === 0) {
			resultArray.push(element);
		}
	});
	return resultArray;
};

getSpacedData("./data.txt")
	.then((data) => {
		const result = filterEvens(data);
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});
