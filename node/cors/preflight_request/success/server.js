const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

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

// Write JSON data and response
const writeJSONAndRespond = (req, res) => {
	const { pathname } = url.parse(req.url, true);
	const reqMethod = ["GET, POST, PUT, DELETE, OPTIONS"];

	if (pathname !== "/api/updateData" || reqMethod.includes(req.method)) {
		res.writeHead(400, { "Content-Type": "text/plain" });
		res.end("Error: No API provided.");
		return;
	}

	const data = { message: "Hello, this is jsonp data!" };
	const jsonData = JSON.stringify(data);

	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.setHeader("Access-Control-Max-Age", "86400");
	res.end(jsonData);
};

// Create server instance
const createServer = (hostname, port, filename) => {
	const server = http.createServer((req, res) => {
		readFileAndRespond(req, res);
	});

	server.listen(port, hostname, () => {
		console.log(`File server running at http://${hostname}:${port}/${filename}`);
	});
};

// Create API server instance
const createApiServer = (hostname, port) => {
	const server = http.createServer((req, res) => {
		writeJSONAndRespond(req, res);
	});

	server.listen(port, hostname, () => {
		console.log(`API server running at http://${hostname}:${port}/api/updateData`);
	});
};

// Server
createServer("localhost", 3000, "index.html");
// API server
createApiServer("localhost", 3001);

// Start
const childProcess = require("child_process");
childProcess.exec(`start http://localhost:3000/index.html`);
