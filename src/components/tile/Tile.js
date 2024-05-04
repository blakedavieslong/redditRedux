import React from 'react';
import styles from './tile.css';
import upButton from '../../resources/pictures/upArrow.jpg';
import downButton from '../../resources/pictures/downArrow.jpg';
import placeholderPic from '../../resources/pictures/placeholder.jpg';

export function Tile() {
  return (
    <div className='articleContainer'>
      <div className='votes column'>
        <button className='voteButton upVote'>
          <img className='voteImg' src={upButton} alt='Upvote button'/>
        </button>
        <h3 className='voteCount'>10.0k</h3>
        <button className='voteButton'>
          <img className='voteImg' src={downButton} alt='Downvote button'/>
        </button>
      </div>
      <div className='article column'>
        <h2>Placeholder Title</h2>
        <img className='articlePic' src={placeholderPic} alt='placeholder text'/>
        <hr className='line'/>
        <span className='details'><p>Posted by</p><p>ago</p><p>999</p></span>
      </div>
    </div>
  );
}
