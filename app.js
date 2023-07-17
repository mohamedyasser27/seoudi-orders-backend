const read = require("./api/read");
const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "https://master--seoudi-orders-frontend.netlify.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/orders/columns", async (req, res) => {
  const metadata = await read.readTableColumns();
  res.send(metadata);
});

app.use("/orders/:sortBy", async (req, res) => {
  const sortBy = req.params.sortBy;
  const data = await read.readTableSorted(sortBy);
  res.send(data);
});

app.use(["/orders", "/"], async (req, res) => {
  const data = await read.readTable();
  res.send(data);
});



module.exports = app;
