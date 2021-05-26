const characterRepository = require("../repositories/character.repository");
const { NotFoundErrorMsg } = require("../helpers/errorResponses");

//get all characters
async function getAllCharacters(req, res, next) {
  try {
    const data = await characterRepository.getAllCharacters();
    return res.json(data);
  } catch (error) {
    return next(error);
  }
}

//get character detail
async function getCharacterDetail(req, res, next) {
  try {
    const { slug } = req.params;
    const data = await characterRepository.getCharacterDetail(slug);
    if (data) {
      return res.json(data);
    } else {
      return res.status(400).send(NotFoundErrorMsg);
    }
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllCharacters,
  getCharacterDetail,
};
