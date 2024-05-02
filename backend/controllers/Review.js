const ObjectId = require('mongodb').ObjectId;
const Reviews = require('../models/Reviews');
const Game = require('../models/Game');

async function getReviewsByUser(req, res) {
  const userId = req.query.userId;

  try {
    console.log('reviews', userId, Reviews);
    let reviews = await Reviews.find({ userId: new ObjectId(userId) });
  
    if(reviews && reviews.length > 0){
      let gameIds = reviews.map((rev) => {
        console.log('gameid', rev.gameId);
        let returnId = new ObjectId(rev.gameId);
        return returnId;
      });
      console.log('gameIds', gameIds);
      const gameList = await Game.find({ _id: {$in: gameIds} });
      console.log('gameList', gameList);
      reviews = reviews.map((rev) => {
        let game = gameList.find((g) => {
          return g._id.equals(rev.gameId);
        });

        console.log('gamefound', game);
        if(game){
          return {
            ...rev.toObject(),
            game: {
              ...game.toObject()
            }
          }
        }else{
          return rev;
        }
      })
    }

    res.json({ reviews: reviews });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

module.exports = { getReviewsByUser };
