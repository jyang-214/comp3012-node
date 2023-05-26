const { createReadStream } = require("fs");
const { EOL } = require("os");
const csv = require("csvtojson");
// const filterByCountry = require("./filter-by-country.js");
// const sumProfit = require("./sum-profit.js");
const { createGunzip, gunzip } = require("zlib");
const { Transform } = require("stream");
const csvParser = csv();

const unzipper = createGunzip();
let totalProfit = 0;
const sumProfit = () => {
	return new Transform({
		transform(chunk, enc, push) {
			const { profit } = JSON.parse(chunk);
			totalProfit += parseFloat(profit);
			push(null);
		},

		flush(push) {
			push(null, `$${String(Math.floor(totalProfit)) + EOL}`);
		},
	});
};

const filterByCountry = (country) => {
	return new Transform({
		transform(chunk, enc, push) {
			const row = JSON.parse(chunk);
			if (row.country === country) {
				push(null, chunk);
			} else {
				push(null);
			}
		},
	});
};

createReadStream("data.csv.gz")
	.pipe(unzipper)
	.pipe(csvParser)
	.pipe(filterByCountry("Italy"))
	.pipe(sumProfit())
	// .on("data", (chunk) => console.log(JSON.parse(chunk)));
	.pipe(process.stdout);
