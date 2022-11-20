const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/calculate", (req, res) => {
  let input = Number(req.body.num1);

  let result = input ** 2;
  res.send(`Result is: ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
