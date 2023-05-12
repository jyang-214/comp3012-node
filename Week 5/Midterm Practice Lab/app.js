const fs = require("fs");

const coffeeTypes = { DR: "dark-roast", MR: "medium-roast", B: "blonde" };
const viewAllSupply = (coffeeType, callback) => {
	fs.readFile("supply.txt", "utf-8", (err, data) => {
		if (err) {
			callback(err);
		} else {
			if (
				coffeeType === "DR" ||
				coffeeType === "MR" ||
				coffeeType === "B"
			) {
				let database = data.split("\n");
				let counter = 0;
				database.forEach((element) => {
					if (element === coffeeTypes[coffeeType]) {
						counter++;
					}
				});
				callback(null, counter);
			} else {
				callback(
					new Error(
						'coffeeType Invalid. Please enter "DR", "MR", or "B"'
					)
				);
			}
		}
	});
};

viewAllSupply("B", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
