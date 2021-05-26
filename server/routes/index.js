const express = require("express");
const characterRoutes = require("./character.route");

//init router
const router = express.Router();

//mount character routes
router.use("/", characterRoutes);

module.exports = router;
