const { unzip, readDir, grayScale } = require("./IOhandler");
const path = require("path");

const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

async function main() {
	try {
		await unzip(zipFilePath, pathUnzipped);
		console.log("Unzipping complete");
		const filePaths = await readDir(pathUnzipped);
		console.log(filePaths);

		// const promArr = [];
		// for (const imgPath of filePaths) {
		// 	promArr.push(grayScale(imgPath, pathProcessed));
		// }
		const promArr = filePaths.map((imgPath) => {
			grayScale(imgPath, pathProcessed);
		});
		await Promise.all(promArr);
		console.log("grayscaling finished");
	} catch (error) {
		console.log(error);
	}
}

main();
