const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
// require("./db/connection");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);

const server = app.listen(9000, function () {
   const port = server.address().port
   console.log("Url Shortener service listening on port ", port)
})