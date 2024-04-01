require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./src/routes/uploadRoute");
const bodyParser = require("body-parser");
const PORT = 5001;
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
