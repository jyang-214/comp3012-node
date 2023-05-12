/** @format */

function readFilePromise(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, "utf-8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

function multiplier(number1, number2) {
	return new Promise((resolve, reject) => {
		if (typeof number1 !== "number" || typeof number2 !== "number") {
			reject(new Error("the first and second arguments must be number"));
		} else {
			const result = parseInt(number1) * parseInt(number2);
			resolve(result);
		}
	});
}

multiplier(11, 13)
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
