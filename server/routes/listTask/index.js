const express = require("express");
const { v4: uuid } = require("uuid");

const router = express.Router();

let listTask = [
  {
    id: uuid(),
    title: "english",
    titleList: "Активные",
    checked: false,
    timer: { from: 80, to: 150 },
  },
  {
    id: uuid(),
    title: "react",
    titleList: "Активные",
    checked: false,
  },
  {
    id: uuid(),
    title: "redux",
    titleList: "Завершенные",
    checked: false,
    timer: { from: 0, to: 3600 },
  },
  {
    id: uuid(),
    title: "vue",
    titleList: "Завершенные",
    checked: false,
    timer: { from: 0, to: 3600 },
  },
  {
    id: uuid(),
    title: "express",
    titleList: "Активные",
    checked: false,
    timer: { from: 0, to: 3600 },
  },
  {
    id: uuid(),
    title: "mongodb",
    titleList: "Активные",
    checked: false,
    timer: { from: 0, to: 3600 },
  },
];

router.get("/", (req, res, next) => {
  return res.json(listTask);
});

router.post("/", (req, res, next) => {
  const { title, titleList } = req.body;
  listTask.push({ id: uuid(), title, titleList, checked: false });

  return res.json(listTask);
});

router.put("/", (req, res, next) => {
  const id = req.body.id;
  const newListTask = listTask.reduce((acc, item) => {
    if (item.id === id) {
      const curr = { ...item, checked: !item.checked };
      if (item.checked) return [...acc, curr];
      return [curr, ...acc];
    }
    return [...acc, item];
  }, []);
  listTask = newListTask;

  return res.json(listTask);
});

router.delete("/", (req, res, next) => {
  const title = req.body.title;
  const newListTask = listTask.reduce((acc, item) => {
    const { checked, titleList } = item;
    if (checked && titleList === title) {
      return acc;
    }
    return [...acc, item];
  }, []);
  listTask = newListTask;

  return res.json(listTask);
});

module.exports = router;
