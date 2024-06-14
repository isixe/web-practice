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
		// Set Origin-Agent-Cluster
		res.setHeader("Origin-Agent-Cluster", "?0");
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

// First server
createServer("127.0.0.1", 80, "root.html");
// Second server
createServer("127.0.0.2", 80, "sub.html");

// Start
const childProcess = require("child_process");
childProcess.exec(`start http://example.com/root.html`);
