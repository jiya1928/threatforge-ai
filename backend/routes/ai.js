const express = require("express");
const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body;

    let threatScore = 20;
    let risk = "Low";

    if (
      text.toLowerCase().includes("password") ||
      text.toLowerCase().includes("login")
    ) {
      threatScore = 75;
      risk = "High";
    }

    res.json({
      success: true,
      threatScore,
      risk,
      recommendation:
        "Enable MFA and investigate suspicious activity."
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;