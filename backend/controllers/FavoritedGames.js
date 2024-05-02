const VideoGames = require('../models/Game');
const FavoritedGames = require('../models/FavoritedGames');

const ObjectId = require('mongodb').ObjectId;

async function getFavoritedGameByUser(req, res) {
  const userId = req.query.userId;

  try {
    const favGames = await FavoritedGames.find({
      userId: new ObjectId(userId),
    });

    let gameIdList = [];

    favGames.forEach((favGame) => {
      gameIdList.push(new ObjectId(favGame.gameId));
    });

    const games = await VideoGames.find({ _id: { $in: gameIdList } });

    return res.json({ success: true, favGames: games });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}

module.exports = {
  getFavoritedGameByUser,
};
