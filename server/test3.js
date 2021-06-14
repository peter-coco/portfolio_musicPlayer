const express = require("express");
const vhost = require("vhost");

const app1 = express();
const app = express();

app1.get("/", function (req, res) {
  res.send("app1");
});

app.use(vhost("https://musicdata.link", app1));

app.listen(8080, () => {
  console.log("start");
});
