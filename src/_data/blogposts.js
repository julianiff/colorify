// required packages
const fetch = require("node-fetch");

async function getAllProducts() {
	const data = await fetch("https://api.crystallize.com/julian/catalogue", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			query: `query {
        catalogue(path: "/", language: "en") {
          children {
            name
            type
            children {
              name
              type
              children {
                name
                type
              }
            }
          }
        }
      }`,
		}),
	});

	const response = await data.json();

	// handle errors
	if (response.errors) {
		let errors = response.errors;
		errors.map((error) => {
			console.log(error.message);
		});
		throw new Error("Aborting: Data errors");
	}

	const children = response.data.catalogue.children;

	console.log(children);

	return children;
}

module.exports = getAllProducts;
