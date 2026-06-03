const express = require("express");
const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    let response =
      "ThreatForge AI is analyzing your cybersecurity query.";

    if (message.toLowerCase().includes("phishing")) {
      response =
        "Potential phishing attack detected. Verify sender identity, inspect URLs, and avoid downloading attachments.";
    } else if (message.toLowerCase().includes("password")) {
      response =
        "Use a password of at least 12 characters, enable MFA, and avoid password reuse.";
    } else if (message.toLowerCase().includes("malware")) {
      response =
        "Possible malware indicators found. Run endpoint scans and isolate affected systems.";
    }

    res.json({
      success: true,
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;