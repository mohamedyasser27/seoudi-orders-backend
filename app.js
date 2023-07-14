const express = require("express");
const cors = require("cors");

const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();
const read = require("./api/read");

app.use(cors(corsOptions));

app.use("/orders", async (req, res) => {
  const data = await read.readTable();
  res.send(data);
});

app.use("/orderProperties", async (req, res) => {
  const metadata = await read.readTableColumns();
  res.send(metadata);
});




module.exports = app;
