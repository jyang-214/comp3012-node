const fs = require("fs");
const { EOL } = require("os");

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
				let database = data.split(EOL);
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

const deleteSupply = (coffeeType, quantity, callback) => {
	if (coffeeType !== "DR" && coffeeType !== "MR" && coffeeType !== "B") {
		callback(
			new Error('coffeeType Invalid. Please enter "DR", "MR", or "B"'),
			null
		);
	} else {
		let database = null;
		fs.readFile("supply.txt", "utf-8", (err, data) => {
			if (err) {
				callback(err, null);
			} else {
				database = data.split(EOL);
				if (quantity === "*") {
					quantity = database.length;
				}
				for (let i = 0; i < quantity; i++) {
					const index = database.indexOf(coffeeTypes[coffeeType]);

					if (index > -1) {
						database.splice(index, 1);
					}
				}
				const joinedDatabase = database.join("\n");
				fs.writeFile("supply.txt", joinedDatabase, (err, data) => {
					if (err) {
						callback(err, null);
					} else {
						callback(null, data);
					}
				});
			}
		});
	}
};

const coffee = "B";
const quantity = 5;

viewAllSupply(coffee, (err1, data1) => {
	if (err1) {
		console.log(err1);
	} else {
		console.log(`All Supplies for ${coffeeTypes[coffee]} is ${data1}`);
		addSupply(coffee, (err2, data2) => {
			if (err2) {
				console.log(err2);
			} else {
				viewAllSupply(coffee, (err3, data3) => {
					if (err3) {
						console.log(err3);
					} else {
						console.log(
							`All Supplies for ${coffeeTypes[coffee]} is ${data3}`
						);
						deleteSupply(coffee, quantity, (err4, data4) => {
							if (err4) {
								console.log(err4);
							} else {
								viewAllSupply(coffee, (err5, data5) => {
									if (err5) {
										console.log(err);
									} else {
										console.log(
											`All Supplies for ${coffeeTypes[coffee]} is ${data5}`
										);
										console.log(`Program is completed.`);
									}
								});
							}
						});
					}
				});
			}
		});
	}
});
