const path = require("path");
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const serverConf = {
	HOST: "127.0.0.1",
	PORT: 3000,
	TARGET: "http://localhost:8080",
};

const { HOST, PORT, TARGET } = serverConf;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(
	"/api",
	createProxyMiddleware({
		target: TARGET,
		pathRewrite: { "^/": "/api/" },
	})
);
app.listen(PORT, HOST, () => {
	console.log(`Server running at http://${HOST}:${PORT}/`);
});

// Start
const childProcess = require("child_process");
childProcess.exec(`start http://${HOST}:${PORT}/index.html`);
