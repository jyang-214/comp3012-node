const { createReadStream } = require("fs");
const http = require("http");
const fs = require("fs").promises;
const qs = require("querystring");

http.createServer(async (req, res) => {
	const url = req.url;
	res.writeHead(200, {
		"Content-Type": "text/html",
	});
	// if the url is "/"
	// send back to index.html homepage

	if (url === "/") {
		// createReadStream(".index.html").pipe(res);
		const content = await fs.readFile("./index.html");
		res.end(content);
	} else if (req.url === "/login") {
		req.on("data", (chunk) => console.log(chunk.toString()));
	}
	//if the url is "/temperature" && method is POST
	// perform the math to do the conversion
	// put the converted result into an html string.
	// Send that string back.
}).listen(8000, () => {
	console.log("server running");
});
