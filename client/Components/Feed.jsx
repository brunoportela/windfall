import React, { useState, useEffect } from 'react'
import Post from './Post';

function Feed(props) {
  
  // order by score
  const posts = props.posts.sort((a, b) => b.score - a.score);
  
  return (
    <div>
      <div className="division subtle">
        <span>{posts.length} / 5 Channels</span>
        <hr/>
      </div>
      {posts.map((post) => <Post key={post.id} post={post} deletePost={props.deletePost}/>)}
    </div>
  )
}

export default Feed
