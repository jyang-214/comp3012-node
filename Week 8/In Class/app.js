// // Callback functions
// const fs = require("fs");

const { write } = require("fs");

// fs.readFile("bcit.txt", (err, data) => {         // returns nothing
// 	// do stuff
// });

// // Promises
// const fs = require("fs").promises;

// fs.readFile("bcit.txt") // return a Promise object with the data in it
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// // Streams
// const fs = require("fs");
// fs.createReadStream("mariomovie.mp4").on("data", (chunk) => doSomething(chunk));

// Promises
// .then() .catch()
// async await

// const fs = require("fs");

// fs.writeFileSync("bcit.txt", "hi bcit");
// const data = fs.readFileSync("bcit.txt", "utf-8");
// console.log(data);

// const fs = require("fs");

// fs.writeFile("bcit.txt", "hi bcit", (err) => {
// 	if (err) {
// 		return console.log(err);
// 	}
// 	fs.readFile("bcit.txt", "utf-8", (err, data) => {
// 		if (err) {
// 			return console.log(err);
// 			console.log(data);
// 		}
// 	});
// });

// const fs = require("fs").promises;

// fs.writeFile("bcit.txt", "hi bcit").then(() =>
// 	fs.readFile("bcit.txt", "utf-8")
// );

// const fs = require("fs").promises;

// async function main() {
// 	await fs.writeFile("bcit.txt", "hi bcit");
// 	const data = await fs.readFile("bcit.txt", "utf-8");
// 	console.log(data);
// }

// main();
// // Top-level await
// await fs.writeFile("bcit.txt", "hello");
// const data = await fs.readFile("bcit.txt", "utf-8");
// return data;

const fs = require("fs").promises;

async function writeRead() {
	try {
		await fs.writeFile("bcit.txt", "hello");
		const data = await fs.readFile("bcit.txt", "utf-8");
		return data;
	} catch (error) {
		console.log(error);
	}
}

async function main() {
	const content = await writeRead();
	console.log(content);
}
main();
