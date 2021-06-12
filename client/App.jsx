import React, { useState } from 'react';
import Search from './Components/Search';
import Feed from './Components/Feed';

const App = () => {
  const [subreddit, setSubreddit] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(encodeURI(`/api/subreddit?name=${subreddit.split(' ').join('')}`))
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        alert('Sorry, the subreddit you are looking is invalid.');
        throw new Error('Invalid subreddit.');
      }
    })
    .then(post => {    
      // check if user is already subscribed
      if (alreadySubbed(post.id)) {
        alert('It looks like you are already subscribed to this subreddit.');
        throw new Error('Seems like you are already subscribed to this subreddit.');
        
      // delete oldest if we've reached the cap
      } else if (posts.length === 5) {
        const arr = [...posts];
        arr.shift();
        setPosts([...arr, post]);
        
        // add new post to feed
      } else {
        setPosts([...posts, post]);
      }

      // clear input field
      e.target.reset();

    }).catch(err => {console.log(err)})
  }

  const alreadySubbed = (currId) => {
    return posts.some((posts) => posts.id === currId);
  }

  const deletePost = (currId) => {
    const arr = [...posts];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === currId) {
        arr.splice(i, 1);
        break;
      }
    }
    setPosts([...arr]);
  }

  return (
    <div className="main">
      <div className="container">
        <Search subreddit={subreddit} setSubreddit={setSubreddit} handleSubmit={handleSubmit}/>
        <Feed posts={posts} deletePost={deletePost}/>
      </div>
  </div>
  );
};

export default App;
