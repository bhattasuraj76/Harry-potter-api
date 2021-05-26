const express = require("express");
const cors = require("cors");
const routes = require("../server/routes");

//set up express
const app = express();

// enable CORS
app.use(cors());
// routes
app.use("/api", routes);

// catch 404
app.use((req, res) => {
  return res.status(400).json({
    message: "Not Found",
  });
});

//error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  return res.status(500).send({ message: "Something Broke!!!" });
});

module.exports = app;
