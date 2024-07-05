import { defineConfig } from "vite";

export default defineConfig({
	server: {
		open: true,
		proxy: {
			"/api": {
				target: "http://localhost:8080",
			},
		},
	},
});
