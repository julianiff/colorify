module.exports = {
	title: "Julian Iff",
	description:
		"Testproject for 11ty and headless cms",
	url: process.env.SITE_URL,
	author: "Julian Iff",
	meta_data: {
		twitter: "@taschenlampe",
		opengraph_default: "/static/opengraph-default.jpg",
	},
	env: process.env.ELEVENTY_ENV === "production",
};
