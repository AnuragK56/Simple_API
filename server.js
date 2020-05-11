const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var port = process.env.PORT || 5000;
const naruto = require("./routes/naruto");
const naruto_shippuden = require("./routes/naruto_shipudden");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.listen(port, function () {
  console.log("Our app is running on http://localhost:" + port);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/getnaruto", (req, res, next) => {
  res.send(naruto);
});
app.get("/api/getnarutoshippuden", (req, res, next) => {
  res.send(naruto_shippuden);
});
