const env = require("dotenv");
//configure dotenv
env.config();

const config = {
  port: process.env.PORT,
};

module.exports = config;
