const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/resume/:file", (req, res) => {
  // Instead of sending the file, log a message to the console
  console.log(`Requested resume file: ${req.params.file}`);
  res.status(404).json({
    message: "File not found",
  });
});

router.get("/profile/:file", (req, res) => {
  // Instead of sending the file, log a message to the console
  console.log(`Requested profile file: ${req.params.file}`);
  res.status(404).json({
    message: "File not found",
  });
});

module.exports = router;
