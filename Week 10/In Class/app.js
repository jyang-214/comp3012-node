// // const { createReadStream } = require("fs");
// const http = require("http");
// function responseHandler(req, res) {
// 	res.setHeader("Content-Type", "text/html");
// 	res.end("<h1>This is some HTML</h1>");
// 	// createReadStream("hello.mp3").pipe(res);
// }
// const server = http.createServer(responseHandler);
// server.listen(8082, () => {
// 	console.log("Server is running");
// });
const express = require("express");
const app = express();
app.use(express.urlencoded());
app.set("view engine", "ejs");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const fileStoreOptions = {};
app.use(
	session({
		secret: "keyboard cat",
		store: new FileStore(fileStoreOptions),
		cookie: { maxAge: 60000 },
	})
);

// Access the session as req.session
app.get("/", function (req, res, next) {
	// if (req.session.views) {
	// 	req.session.views++;
	// 	res.setHeader("Content-Type", "text/html");
	// 	res.write("<p>views: " + req.session.views + "</p>");
	// 	res.write(
	// 		"<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>"
	// 	);
	// 	res.end();
	// } else {
	// 	req.session.views = 1;
	// 	res.end("welcome to the session demo. refresh!");
	// }
	// Send back the login.ejs page
	res.render("login");
});

// // Do you want to handle a GET REQUEST
// // OR a POST REQUEST

// app.get("/", (req, res) => {
// 	const usernameFromDatabase = "jacky";
// 	// res.send(`<h1>Welcome to ${usernameFromDatabase} homepage</h1>`);
// 	// res.send(`<!DOCTYPE html>
// 	// <html lang="en">
// 	// <head>
// 	//     <meta charset="UTF-8">
// 	//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	//     <title>Document</title>
// 	// </head>
// 	// <body>
// 	// <h1>Welcome to ${usernameFromDatabase} homepage</h1>
// 	// </body>
// 	// </html>`);
// 	res.render("homepage", { usernameFromDatabase });
// });

// app.get("/login", (req, res) => {
// 	res.render("login");
// });

// app.get("/dashboard", (req, res) => {
// 	res.render("dashboard");
// });

// app.post("/loginSubmit", (req, res) => {
// 	console.log(req.body);
// 	res.redirect("/dashboard");
// });

app.listen(8082, () => {
	console.log("Server is running");
});
