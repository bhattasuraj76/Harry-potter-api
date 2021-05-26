const characters = require("../mock-db/characters.json");

async function getAllCharacters() {
  return characters;
}

async function getCharacterDetail(slug) {
  return characters.find((each) => each.slug === slug);
}

module.exports = {
  getAllCharacters,
  getCharacterDetail,
};
