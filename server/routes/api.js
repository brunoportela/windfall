const express = require('express');
const subredditController = require('../controllers/subredditController');

const router = express.Router();

router.get('/subreddit',
  subredditController.getSubreddit,
  subredditController.filterData, (req, res) => {
    res.status(200).json(res.locals);
  });

module.exports = router;
