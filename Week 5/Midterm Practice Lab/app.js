const fs = require("fs");

const coffeeTypes = { DR: "dark-roast", MR: "medium-roast", B: "blonde" };
const viewAllSupply = (coffeeType, callback) => {
	if (coffeeType !== "DR" && coffeeType !== "MR" && coffeeType !== "B") {
		callback(
			new Error('coffeeType Invalid. Please enter "DR", "MR", or "B"'),
			null
		);
	} else {
		fs.readFile("supply.txt", "utf-8", (err, data) => {
			if (err) {
				callback(err, null);
			} else {
				let database = data.split("\n");
				let counter = 0;
				database.forEach((element) => {
					if (element === coffeeTypes[coffeeType]) {
						counter++;
					}
				});
				callback(null, counter);
			}
		});
	}
};

const addSupply = (coffeeType, callback) => {
	if (coffeeType !== "DR" && coffeeType !== "MR" && coffeeType !== "B") {
		callback(
			new Error('coffeeType Invalid. Please enter "DR", "MR", or "B"'),
			null
		);
	} else {
		fs.appendFile(
			"supply.txt",
			`\n${coffeeTypes[coffeeType]}`,
			(err, data) => {
				if (err) {
					callback(err, null);
				} else {
					callback(null, data);
				}
			}
		);
	}
};

viewAllSupply("B", (err1, data1) => {
	if (err1) {
		console.log(err1);
	} else {
		console.log(data1);
		addSupply("B", (err2, data2) => {
			if (err2) {
				console.log(err2);
			} else {
				viewAllSupply("B", (err3, data3) => {
					if (err3) {
						console.log(err3);
					} else {
						console.log(data3);
					}
				});
			}
		});
	}
});
