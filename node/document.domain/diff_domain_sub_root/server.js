const http = require("http");

const host_root = "127.0.0.1";
const host_sub = "127.0.0.2";
const port = 80;

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
	.listen(port, host_sub, () => {
		console.log(`Server running at http://${host_sub}:${port}/sub.html`);
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
	.listen(port, host_root, () => {
		console.log(`Server running at http://${host_root}:${port}/root.html`);
	});

// Start
const childProcess = require("child_process");
childProcess.exec(`start http://example.com/root.html`);
