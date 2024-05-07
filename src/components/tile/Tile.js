import React from 'react';
import styles from './tile.css';
import upButton from '../../resources/pictures/upArrow.jpg';
import downButton from '../../resources/pictures/downArrow.jpg';
import placeholderPic from '../../resources/pictures/placeholder.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

export function Tile({title, votes, comments, author, imgSrc, created}) {
  let displayImage;

  if(imgSrc && imgSrc !== 'self' && imgSrc !== 'default' && imgSrc !== 'image') {
    displayImage = 
      <img
        className='articlePic' 
        src={imgSrc}
        alt='placeholder text'
      />
  } else {
    displayImage = <div></div>;
  }
  


  return (
    <div className='articleContainer'>
      <div className='votes column'>
        <button className='voteButton upVote'>
          <img className='voteImg' src={upButton} alt='Upvote button'/>
        </button>
        <h3 className='voteCount'>{Math.round(votes/100)/10}k</h3>
        <button className='voteButton'>
          <img className='voteImg' src={downButton} alt='Downvote button'/>
        </button>
      </div>
      <div className='article column'>
        <h2>{title}</h2>
        {displayImage}
        <hr className='line'/>
        <span className='details'>
          <p>Posted by <span className='author'>{author}</span></p>
          <p>{moment.unix(created).fromNow()}</p>
          <p><FontAwesomeIcon icon={faComment} />{`  ${comments}`}</p>
        </span>
      </div>
    </div>
  );
}
