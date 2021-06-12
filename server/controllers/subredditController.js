const fetch = require('node-fetch');

const subredditController = {};

subredditController.getSubreddit = (req, res, next) => {
  const {name} = req.query;

  fetch(`https://www.reddit.com/r/${name}.json`)
    .then(res => res.json())
    .then((data) => {
      res.locals = data;
      next();
    })
    .catch((err) => next({
      log: err,
      message: { err: 'subredditController.getSubreddit failed.' },
    }));
};

subredditController.filterData = (req, res, next) => {
  // the readme is ambiguos on the definition of "top post":
  // data.children[0] or post with highest score?
  
  // if data.children[0]:
  let index = 0;
  
  // if top post means post with highest score, leave the code below uncommented
  let max = 0;
  res.locals.data.children.map((post, i) => {
    if (post.score > max) {
      max = post.score;
      index = i;
    }
  })
  // until here

  const {id, subreddit, title, thumbnail, permalink, ups, score, created} = res.locals.data.children[index].data;
  res.locals = {id, subreddit, title, thumbnail, permalink, ups, score, created}
  console.log(res.locals)
  next();
  
};


module.exports = subredditController;
