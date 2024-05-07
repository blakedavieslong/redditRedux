import React, { useState } from 'react';
import styles from './titleBar.module.css';
import redditImage from '../../resources/pictures/reddit.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubReddit } from '../../features/reddit/redditSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { searchReddit } from '../../features/reddit/redditSlice';

export function TitleBar() {
  const subReddit = useSelector(selectSubReddit);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    dispatch(searchReddit(searchValue));
    setSearchValue('');
  }

  return (
    <header className={styles.topBar}>
      <div className={styles.subReddit}>
        <h1>{subReddit}</h1>
      </div>
      <div className={styles.title}>
        <img className={styles.logo} src={redditImage}  alt="Reddit logo" />
        <h1><span className={styles.highlight}>Reddit</span>Minimal</h1>
      </div>
      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <input type='search' placeholder='Search reddit...' size="20" value={searchValue} onChange={(e) => (setSearchValue(e.target.value))} />
          <button className={styles.searchButton}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
      </div>
    </header>
  );
}
