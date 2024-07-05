const path = require("path");

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "/src/index.js"),
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	devServer: {
		open: true,
		host: "127.0.0.1",
		port: 3000,
		static: {
			directory: path.join(__dirname, "./dist"),
		},
		proxy: [
			{
				context: ["/api"],
				target: "http://localhost:8080",
			},
		],
	},
};
