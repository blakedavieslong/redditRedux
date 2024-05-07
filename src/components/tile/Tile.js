import React from 'react';
import styles from './tile.module.css';
import upButton from '../../resources/pictures/upArrow.jpg';
import downButton from '../../resources/pictures/downArrow.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

export function Tile({title, votes, comments, author, imgSrc, created, subReddit}) {
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
    <div className={styles.articleContainer}>
      <div className={`${styles.votes} ${styles.column}`}>
        <button className={`${styles.voteButton} ${styles.upVote}`}>
          <img className={styles.voteImg} src={upButton} alt='Upvote button'/>
        </button>
        <h3 className={styles.voteCount}>{Math.round(votes/100)/10}k</h3>
        <button className={styles.voteButton}>
          <img className={styles.voteImg} src={downButton} alt='Downvote button'/>
        </button>
      </div>
      <div className={`${styles.article} ${styles.column}`}>
        <h2>{title}</h2>
        {displayImage}
        <hr className={styles.line}/>
        <span className={styles.details}>
          <p>Posted by <span className={styles.author}>{author}</span> to r/{subReddit}</p>
          <p>{moment.unix(created).fromNow()}</p>
          <p><FontAwesomeIcon icon={faComment} />{`  ${comments}`}</p>
        </span>
      </div>
    </div>
  );
}
