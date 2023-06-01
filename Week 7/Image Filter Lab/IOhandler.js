/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date:
 * Author:
 *
 */

const AdmZip = require("adm-zip"),
	fs = require("fs"),
	PNG = require("pngjs").PNG,
	path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
	return new Promise((resolve, reject) => {
		try {
			const zip = new AdmZip(pathIn);
			zip.extractAllTo(pathOut);
			resolve("Extraction Operation complete");
		} catch (error) {
			reject(error);
		}
	});
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
	return new Promise((resolve, reject) => {
		fs.readdir(dir, (error, files) => {
			if (error) {
				reject(error);
				return;
			}

			const pngFiles = files.filter(
				(file) => path.extname(file) === ".png"
			);
			const pngFilePaths = pngFiles.map((file) => path.join(dir, file));
			resolve(pngFilePaths);
		});
	});
};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (filePath, pathProcessed) => {
	return new Promise((resolve, reject) => {
		fs.readdir(filePath, (error, files) => {
			if (error) {
				reject(error);
				return;
			}

			const pngFiles = files.filter(
				(file) => path.extname(file) === ".png"
			);

			const promises = pngFiles.map((file) => {
				const inputPath = path.join(filePath, file);
				const outputFile = path.join(pathProcessed, file);

				return new Promise((resolve, reject) => {
					fs.createReadStream(inputPath)
						.pipe(new PNG())
						.on("parsed", function () {
							for (let y = 0; y < this.height; y++) {
								for (let x = 0; x < this.width; x++) {
									const idx = (this.width * y + x) << 2;
									const avg =
										(this.data[idx] +
											this.data[idx + 1] +
											this.data[idx + 2]) /
										3;
									this.data[idx] = avg;
									this.data[idx + 1] = avg;
									this.data[idx + 2] = avg;
								}
							}

							this.pack()
								.pipe(fs.createWriteStream(outputFile))
								.on("finish", resolve)
								.on("error", reject);
						})
						.on("error", reject);
				});
			});

			Promise.all(promises)
				.then(() => resolve("Grayscale Operation completed."))
				.catch((error) => reject(error));
		});
	});
};

module.exports = {
	unzip,
	readDir,
	grayScale,
};
