const fs = require("fs");

fs.readFilePromise = function (fileName) {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

fs.readFilePromise("./file1.txt")
	.then((data1) => {
		fs.readFilePromise(data1)
			.then((data2) => {
				fs.readFilePromise(data2)
					.then((data3) => {
						fs.readFilePromise(data3)
							.then((data4) => {
								console.log(`Contents of file1: ${data1}`);
								console.log(`Contents of file2: ${data2}`);
								console.log(`Contents of file3: ${data3}`);
								console.log(`Contents of file4: ${data4}`);
							})
							.catch((err) =>
								console.log(`Error reading file4: ${err}`)
							);
					})
					.catch((err) => console.log(`Error reading file3: ${err}`));
			})
			.catch((err) => console.log(`Error reading file2: ${err}`));
	})
	.catch((err) => console.log(`Error reading file1: ${err}`));
