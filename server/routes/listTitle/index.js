const express = require("express");
const router = express.Router();

let listTitle = [
  { title: "Активные", active: true },
  { title: "Завершенные", active: false },
];

router.get("/", (req, res, next) => {
  return res.json(listTitle);
});

router.post("/", (req, res, next) => {
  const title = req.body.title;
  listTitle.push({ title, active: false });
  return res.json(listTitle);
});

router.put("/", (req, res, next) => {
  const index = req.body.index;
  // делаем неактивным item
  const prevActiveItemIndex = listTitle.findIndex(({ active }) => active);
  listTitle[prevActiveItemIndex].active = false;
  // делаем активным item
  listTitle[index].active = true;
  return res.json(listTitle);
});

router.delete("/", (req, res, next) => {
  const title = req.body.title;
  const _ = listTitle.filter((item) => item.title !== title);
  _[0] = { title: "Активные", active: true };
  listTitle = _;
  return res.json(listTitle);
});

module.exports = router;
