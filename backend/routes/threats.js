const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const threats = [
    {
      ip: "192.168.1.5",
      severity: "High",
    },
    {
      ip: "172.16.0.7",
      severity: "Medium",
    },
  ];

  res.json(threats);
});

module.exports = router;