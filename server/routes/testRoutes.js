const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FoodHub backend is working!",
  });
});

module.exports = router;