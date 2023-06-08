const { Extract } = require("unzipper");
const fs = require("fs").promises;
const { createReadStream, createWriteStream } = require("fs");
const { pipeline } = require("stream");
const path = require("path");
const PNG = require("pngjs").PNG;

const unzip = (pathIn, pathOut) => {
	return pipeline(
		createReadStream(pathIn),
		Extract({ path: pathOut }),
		(err) => {
			if (err) {
				throw err;
			}
		}
	).promise();
};

// const readDir = async (dir) => {
// 	const files = await fs.readdir(dir);
// };

const readDir = (dir) => {
	return fs.readdir(dir).then((files) => {
		const unzippedFilePaths = [];
		for (const file of files) {
			if (path.extname(file) === ".png") {
				unzippedFilePaths.push(path.join(dir, file));
			}
		}
		return unzippedFilePaths;
	});
};

const grayScale = (pathIn, pathOut) => {
	return new Promise((resolve, reject) => {
		const file = "grayscaled_" + path.parse(pathIn).base;
		const outputImg = path.join(pathOut, file);

		const rImg = createReadStream(pathIn);
		const png = new PNG();
		const wImg = createWriteStream(outputImg);

		// what to do in the transform stream
		png.on("parsed", function () {
			for (var y = 0; y < this.height; y++) {
				for (var x = 0; x < this.width; x++) {
					var idx = (this.width * y + x) << 2;

					const red = this.data[idx];
					const green = this.data[idx + 1];
					const blue = this.data[idx + 2];
					const gray = (red + green + blue) / 3;

					this.data[idx] =
						this.data[idx + 1] =
						this.data[idx + 2] =
							gray;
				}
			}

			this.pack();
		});

		pipeline(
			rImg,
			png,
			wImg.on("finish", () => resolve("Fulfilled")),
			(err) => reject(err)
		);
	});
};

module.exports = { unzip, readDir, grayScale };
