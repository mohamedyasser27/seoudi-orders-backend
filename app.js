const read = require("./api/read");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors([
    "https://orders-seoudi.onrender.com",
    "https://master--papaya-truffle-97e835.netlify.app",
  ])
);



app.use("/orders", async (req, res) => {
  const data = await read.readTable();
  res.send(data);
});

app.use("/orderProperties", async (req, res) => {
  const metadata = await read.readTableColumns();
  res.send(metadata);
});

module.exports = app;
