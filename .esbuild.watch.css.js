const build = require("esbuild").build;
const sassPlugin = require("esbuild-plugin-sass");

const INPUT_DIR = "./src/_assets/stylesheets/styles.scss";
const OUTPUT_DIR = "./src/static/styles.css";

// Build Styling
build({
	entryPoints: [INPUT_DIR],
	outfile: `${OUTPUT_DIR}`,
	bundle: true,
	minify: process.env.NODE_ENV === "production" ? true : false,
	color: true,
	allowOverwrite: true,
	plugins: [sassPlugin()],
	watch: process.env.NODE_ENV === "production" ? false : {
		onRebuild(error, result) {
			if (error) console.error("watch build failed:", error);
			else console.log("watch build succeeded:", result);
		},
	},
});
