const http = require("http");

const hostname = "localhost";
const port_sub = 3000;
const port_root = 3001;

const fs = require("fs");
const path = require("path");

// Create a index file in same directory
const filepath = path.resolve(__dirname, "./");

// First server
http
	.createServer(function (req, res) {
		fs.readFile(filepath + req.url, function (err, data) {
			if (err) {
				res.writeHead(404, { "Content-Type": "text/plain" });
				res.end("File not found");
				return;
			}

			res.setHeader("Origin-Agent-Cluster", "?0");
			res.write(data);
			res.end();
		});
	})
	.listen(port_sub, hostname, () => {
		console.log(`Server running at http://${hostname}:${port_sub}/sub.html`);
	});

// Second server
http
	.createServer(function (req, res) {
		fs.readFile(filepath + req.url, function (err, data) {
			if (err) {
				res.writeHead(404, { "Content-Type": "text/plain" });
				res.end("File not found");
				return;
			}

			res.setHeader("Origin-Agent-Cluster", "?0");
			res.write(data);
			res.end();
		});
	})
	.listen(port_root, hostname, () => {
		console.log(`Server running at http://${hostname}:${port_root}/root.html`);
	});

// Start
const childProcess = require("child_process");
childProcess.exec(`start http://${hostname}:${port_root}/root.html`);
