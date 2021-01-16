const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser());

// app.get("/", (req, res, next) => {
//   return res.json("hello");
// });

const listTitleRouter = require("./routes/listTitle");
const listTaskRouter = require("./routes/listTask");

app.use("/listTitle", listTitleRouter);
app.use("/listTask", listTaskRouter);

module.exports = app;
