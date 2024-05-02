const ObjectId = require('mongodb').ObjectId;
const Reviews = require('../models/Reviews');
const Game = require('../models/Game');
const User = require('../models/User');

async function getReviewsByUser(req, res) {
  const userId = req.query.userId;

  try {
    console.log('reviews', userId, Reviews);
    let reviews = await Reviews.find({ userId: new ObjectId(userId) });

    if (reviews && reviews.length > 0) {
      let gameIds = reviews.map((rev) => {
        console.log('gameid', rev.gameId);
        let returnId = new ObjectId(rev.gameId);
        return returnId;
      });
      console.log('gameIds', gameIds);
      const gameList = await Game.find({ _id: { $in: gameIds } });
      console.log('gameList', gameList);
      reviews = reviews.map((rev) => {
        let game = gameList.find((g) => {
          return g._id.equals(rev.gameId);
        });

        console.log('gamefound', game);
        if (game) {
          return {
            ...rev.toObject(),
            game: {
              ...game.toObject(),
            },
          };
        } else {
          return rev;
        }
      });
    }

    res.json({ reviews: reviews });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

async function getReviewsByGameExId(req, res) {
  try {
    const gameId = req.query.gameId;
    console.log('gameId', req.params);
    const reviews = await Reviews.find({ externalGameId: gameId });

    let userIds = reviews.map((r) => {
        let returnId = new ObjectId(r.userId);
        return returnId;
    });
    console.log('userIds', userIds);

    const users = await User.find({ _id: { $in: userIds } });
    console.log('users', users);
    let newReturn = reviews.map((r) => {
      let user = users.find((u) => {
        console.log('user u._id', u._id);
        return u._id.equals(r.userId);
      });
      console.log('user found', r.userId, user);
      if (user) {
        return {
          ...r.toObject(),
          user: {
            ...user.toObject(),
          },
        };
      } else {
        return {
          ...r.toObject(),
          user: {},
        };
      }
    });

    res.json(newReturn);
  } catch (error) {
    console.log('error fetching all reviews', error);
    res.status(500).json({ message: 'error fetching all animals' });
  }
}

module.exports = { getReviewsByUser, getReviewsByGameExId };
