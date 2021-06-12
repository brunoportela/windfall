import React, {useEffect, useState} from 'react';

function Search(props) {
  return (
    <div className="searchContainer">
      <div>
        <p>Add to my feed:</p>
      </div>
      <div>
        <form id="subForm" className="subForm" onSubmit={props.handleSubmit}>
          <div className="subLabelDiv">
            <label className="subLabel">r/</label>
          </div>
          <input className="inputField" type="text" name="search" id="search" placeholder="AskReddit" onChange={(e) => props.setSubreddit(e.target.value)}/>
          <button className="subButton">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  )
}

export default Search
