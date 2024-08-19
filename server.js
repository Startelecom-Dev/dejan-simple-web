const express = require("express");
const { config } = require("./config.js");
const https = require("https");
const fs = require("fs");

const app = express();

// Express server using certificates from .secure folder
const options = {
  key: fs.readFileSync(".secure/cert.key"),
  cert: fs.readFileSync(".secure/cert.pem"),
};

app.use(express.static(__dirname + "/src"));

const httpsServer = https.createServer(options, app);
httpsServer.listen(config.PORT, () => {
  console.log(`HTTPS Server running on port ${config.PORT}`);
});
