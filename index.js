const express = require("express");
const app = express();
const port = 3000;

var counter = 0;

function message() {
  return `Counter app -- this instace has been viewed ${counter++} times`;
}

app.get("/*", (req, res) => res.send(message()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
