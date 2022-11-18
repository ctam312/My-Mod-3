const http = require("http");

const server = http.createServer((req, res) => {
	console.log(`${req.method} ${req.url}`);

	let reqBody = "";
	req.on("data", (data) => {
		reqBody += data;
	});

	req.on("end", () => {
		// Parse the body of the request as JSON if Content-Type header is
		// application/json
		// Parse the body of the request as x-www-form-urlencoded if Content-Type
		// header is x-www-form-urlencoded
		if (reqBody) {
			if (req.headers["content-type"] === "x-www-form-urlencoded") {
				req.body = reqBody
					.split("&")
					.map((keyValuePair) => keyValuePair.split("="))
					.map(([key, value]) => [key, value.replace(/\+/g, " ")])
					.map(([key, value]) => [key, decodeURIComponent(value)])
					.reduce((acc, [key, value]) => {
						acc[key] = value;
						return acc;
					}, {});
			}

			if (req.header["content-type"] === "application/json") {
				req.body = JSON.parse(reqBody);
			}
			// Log the body of the request to the terminal
			console.log(req.body);
		}
		// 1. set res body
		const resBody = {
			Hello: "World!",
		};

		// Return the `resBody` object as JSON in the body of the response

		//2. set content type
		res.setHeader("content-type", "application/json");

		//3. set status code
		res.statusCode = 200;

		// 4. return rest body
		return res.end(JSON.stringify(resBody));
	});
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
