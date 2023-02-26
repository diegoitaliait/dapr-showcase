const express = require("express");
const router = express.Router();

const colors = ["red", "green", "blue", "blue2", "darkblue", "pink"]

router.get("/", (req, res) => {
  const color = process.env.APP_COLOR ? process.env.APP_COLOR : colors[Math.floor(Math.random() * colors.length) | 0];
  console.log(`color: ${color}`)
  res.status(200).send(color)
});

module.exports = router;
