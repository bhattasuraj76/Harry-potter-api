const express = require("express");
const {
  getAllCharacters,
  getCharacterDetail,
} = require("../controllers/character.controller");

//init router
const router = express.Router();

//find all characters
router.get("/characters", getAllCharacters);

//find character detail
router.get("/characters/:slug", getCharacterDetail);

module.exports = router;
