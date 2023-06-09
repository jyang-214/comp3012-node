const net = require("net");
const http = require("http");
const process = require("process");
const fs = require("fs").promises;
const port = process.env.PORT || 8000;

const listener = async (request, response) => {
	// request is a Readable Stream; response is a Writeable Stream
	const url = request.url;

	// console.log("A request was made");
	// Tell the browser, is the request it made was successful or not
	// Status code: 200 = OK, 404 = NOT FOUND
	// -> Also need to tell the browser what content type (MIME-TYPE) we are sending back
	response.writeHead(200, {
		"Content-Type": "text/html",
	});

	if (url === "/") {
		const content = await fs.readFile("./index.html");
		response.end(content);
	} else if (url === "/dogs.html") {
		response.end("Dogs");
	} else {
		response.end("Something else");
	}
};

const server = http.createServer(listener);
server.listen(port, () => {
	console.log("Server is now running.");
});
