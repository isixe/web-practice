const http = require("http");
const fs = require("fs");
const path = require("path");

// Server base directory
const filepath = path.resolve(__dirname, "./");

// Read the file and respond
const readFileAndRespond = (req, res) => {
	fs.readFile(filepath + req.url, (err, data) => {
		if (err) {
			res.writeHead(404, { "Content-Type": "text/plain" });
			res.end("File not found");
			return;
		}

		res.write(data);
		res.end();
	});
};

// Create server instance
const createServer = (hostname, port, filename) => {
	const server = http.createServer((req, res) => {
		readFileAndRespond(req, res);
	});

	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/${filename}`);
	});
};

// Page server
createServer("localhost", 3000, "index.html");
// javascript server
createServer("localhost", 3001, "callback.js");

// Start
const childProcess = require("child_process");
childProcess.exec(`start http://localhost:3000/index.html`);
