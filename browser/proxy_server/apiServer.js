const http = require("http");
const url = require("url");

// Write JSON data and response
const writeJSONAndRespond = (req, res) => {
	const { pathname } = url.parse(req.url, true);

	if (pathname !== "/api/updateData" || req.method !== "PUT") {
		res.writeHead(400, { "Content-Type": "text/plain" });
		res.end("Error: No API provided.");
		return;
	}

	const data = { message: "Hello, this is proxy server data!" };
	const jsonData = JSON.stringify(data);
	res.end(jsonData);
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

// API server
createApiServer("localhost", 8080);
