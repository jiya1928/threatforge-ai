const express = require('express');
const mongoose = require('mongoose');

const app = express();

// 🔗 Direct NON-SRV MongoDB Atlas URI
const uri = "mongodb://threatforgeadmin:JIYABHARDWAJ@ac-hmpegm2-shard-00-00.4jiybal.mongodb.net:27017,ac-hmpegm2-shard-00-01.4jiybal.mongodb.net:27017,ac-hmpegm2-shard-00-02.4jiybal.mongodb.net:27017/threatforge-ai?ssl=true&replicaSet=atlas-vgsnlh-shard-0&authSource=admin&retryWrites=true&w=majority";

// ✅ Connect to MongoDB Atlas
mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB Atlas (non-SRV)"))
  .catch(err => console.error("❌ Connection error:", err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Jiya, ThreatForge-AI is connected without SRV!');
});

app.listen(5000, () => {
  console.log('🚀 ThreatForge-AI backend running on port 5000');
});
