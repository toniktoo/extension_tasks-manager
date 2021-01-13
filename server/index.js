const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const listsTask = {
  active: [
    { id: 0, title: "english" },
    { id: 1, title: "react" },
    { id: 2, title: "redux" },
    { id: 3, title: "vue" },
  ],
  end: [
    { id: 0, title: "express" },
    { id: 1, title: "mongodb" },
  ],
};

const listTaskNames = {
  active: "Активные",
  end: "Завершенные",
};

app.use(cors());

app.get("/", (req, res, next) => {
  return res.json("hello");
});

app.get("/listTaskNames", (req, res, next) => {
  return res.json(listTaskNames);
});

app.get("/listsTask", (req, res, next) => {
  return res.json(listsTask);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
