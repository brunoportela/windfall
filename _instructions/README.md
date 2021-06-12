# Reddit Feed

## Overview
We would like you to build a very lightweight Reddit feed using their JSON API (add .json to a Reddit URL). A user should be able to optionally "follow" subreddits and the top post (highest post score) for each subreddit should be displayed in the feed linking to the actual post.

## Requirements
- Please only use HTML, CSS, and vanilla Javascript for frontend
- Any backend work is more open-ended, but please use a modern framework and language such as Node.js, Python, or Java.
- Only need to support one user
- User's Reddit feed should start empty
- User can "follow" new subreddit by typing subreddit name into text box
- User's Reddit feed should only contain the top post for each followed subreddit
- Posts in feed should be sorted by "score"
- Posts in feed should link to actual Reddit post
- A maximum of 5 subreddits can be followed at any given time. The oldest followed subreddit is removed as count goes above 5.
- Please try to match the provided mock up as close as possible.

## Misc Callouts
- You will be graded on likeness to the mockup, functionality, and edge case handling.
- A post score is Reddit's calculation for a post's popularity.
- Reddit data can be accessed adding `.json` to the end of the URL. We're NOT using their full fledged developer API so an API token is not required.
- There's a lot of JSON in the Reddit response. Some potentially useful fields on subreddit request (i.e. [Denver subreddit](https://www.reddit.com/r/denver.json)):
	- data.children = posts
	- data.children[0] = top post
	- data.children[0].url = post url
	- data.children[0].score = Post score
- Feel free to also use the `about.json` and `top.json` url endpoints as well.