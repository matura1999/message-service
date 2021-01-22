const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = 3001;
app.use(express.json());
// app.use(bodyParser);

app.get("/", (req, res) => {
  res.send("Hello World!");

  // console.log("received GET request in port 3001");
});

app.post("/", (req, res) => {
  console.log("received POST request in port 3001");
  console.log(req.body);
  // res.json({ requestBody: req.body });
  res.send({
    message: "China's response",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
