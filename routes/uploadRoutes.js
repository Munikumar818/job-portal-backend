const express = require("express");

const router = express.Router();

router.post("/resume", (req, res) => {
  // Instead of uploading the file, log a message to the console
  console.log("Resume file upload requested, but file upload is disabled.");
  res.status(400).json({
    message: "File upload is disabled",
  });
});

router.post("/profile", (req, res) => {
  // Instead of uploading the file, log a message to the console
  console.log("Profile image upload requested, but file upload is disabled.");
  res.status(400).json({
    message: "File upload is disabled",
  });
});

module.exports = router;
