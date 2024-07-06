const http = require("http");
const WebSocket = require("ws");

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
		console.log(`[CLIENT] File server running at http://${hostname}:${port}/${filename}`);
	});
};

// Create websocket server instance
const createWebsocketServer = (port) => {
	const wss = new WebSocket.Server({ port });
	console.log(`[WEBSOCKET SERVER] Start`);

	wss.on("connection", (wss) => {
		console.log(`[WEBSOCKET SERVER] connection`);

		wss.on("message", (message) => {
			console.log(`[WEBSOCKET SERVER] Received: ${message}`);

			const data = { message: "Hello, this is websocket data!" };
			wss.send(JSON.stringify(data));
		});

		wss.on("close", (code, reason) => {
			console.log(`[WEBSOCKET SERVER] Connection closed: ${code} ${reason}`);
		});
	});
};

// Server
createServer("127.0.0.1", 3000, "index.html");
createWebsocketServer(8080);

// Start
const childProcess = require("child_process");
childProcess.exec(`start http://localhost:3000/index.html`);
