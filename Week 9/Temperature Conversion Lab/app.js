const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if (req.method === "GET" && req.url === "/") {
		fs.readFile("index.html", "utf8", (err, data) => {
			if (err) {
				res.statusCode = 500;
				res.end("Internal Server Error");
			} else {
				const bootstrapCDN = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">`;

				res.setHeader("Content-Type", "text/html");
				res.write(bootstrapCDN);
				res.end(data);
			}
		});
	} else if (req.method === "POST" && req.url === "/convert") {
		let body = "";

		req.on("data", (chunk) => {
			body += chunk;
		});

		req.on("end", () => {
			const formData = new URLSearchParams(body);
			const temperature = parseFloat(formData.get("temperature"));
			const conversionType = formData.get("conversionType");
			let result;

			if (conversionType === "celsiusToFahrenheit") {
				const fahrenheit = (temperature * 9) / 5 + 32;
				result = `${temperature.toFixed(2)}°C = ${fahrenheit.toFixed(
					2
				)}°F`;
			} else if (conversionType === "fahrenheitToCelsius") {
				const celsius = ((temperature - 32) * 5) / 9;
				result = `${temperature.toFixed(2)}°F = ${celsius.toFixed(
					2
				)}°C`;
			} else {
				result = "Invalid conversion type";
			}

			const bootstrapCDN = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">`;

			const resultPage = `
								<!DOCTYPE html>
								<html>
								<head>
									<meta charset="UTF-8">
									<title>Temperature Converter - Result</title>
									${bootstrapCDN}
								</head>
								<body>
									<div class="container">
									<h1 class="mt-4">Result</h1>
									<p>${result}</p>
									<button onclick="window.location.href='/'" class="btn btn-primary">Go Back</button>
									</div>
								</body>
								</html>
   							   `;

			res.setHeader("Content-Type", "text/html; charset=UTF-8");
			res.end(resultPage);
		});
	} else {
		res.statusCode = 404;
		res.end("Not Found");
	}
});

server.listen(3000, () => {
	console.log("Server is running on port 3000");
});
