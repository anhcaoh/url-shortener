const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);
require("dotenv").config();
const server = app.listen(process.env.SERVICE_PORT, function () {
   const port = server.address().port
   console.log("Url Shortener service listening on port ", port)
})