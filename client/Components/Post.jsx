import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


function Post(props) {
  const date = new Date(props.post.created * 1000)
  const dateOptions = {month: 'short', day: 'numeric', year: 'numeric'}
  const timeOptions = {hour: 'numeric', minute: 'numeric'}

  const defaultImg = (e) => {
    e.target.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  }

  return (
    <div className="postContainer">
      <div>
        <img className="thumbnail" src={props.post.thumbnail} onError={defaultImg}/>
      </div>
      <div className="details">
        <div className="subreddit">
          <span className="subtle">r/</span>{props.post.subreddit}
        </div>
        <div className="title">
          <a href={"https://www.reddit.com" + (props.post.permalink ? props.post.permalink : '')} target="_blank">{props.post.title}</a>
        </div>
        <div className="subtle stats">
          {props.post.ups} <ThumbUpIcon className="likeIcon"/>| {date.toLocaleString('en-US', dateOptions)} {date.toLocaleString('en-US', timeOptions)}
        </div>
      </div>
      <div className="close">
        <CloseIcon onClick={() => props.deletePost(props.post.id)}/>
      </div>
    </div>
  )
}

export default Post
