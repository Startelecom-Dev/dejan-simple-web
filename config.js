const dotenv = require("dotenv");
dotenv.config();

const config = {
  // Set up the port automatically by allowing the API to be deployed to a cloud platform like AWS or Azure.
  // In case the process.env.PORT variable is not set, we’ll default to using port 3000.
  PORT: process.env.API_PORT || 5200,
};

const testConfig = {};

module.exports = { config, testConfig };
