const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/test", (req, res) => {
	res.send("Coucou c'est moi la route de test.");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
