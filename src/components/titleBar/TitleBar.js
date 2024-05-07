import React, { useEffect, useState } from 'react';
import styles from './titleBar.module.css';
import redditImage from '../../resources/pictures/reddit.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubReddit, pullSubReddit } from '../../features/reddit/redditSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { searchReddit } from '../../features/reddit/redditSlice';

export function TitleBar() {
  const subReddit = useSelector(selectSubReddit);
  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState(subReddit);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplayList(subReddit);
  }, [dispatch, subReddit]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(searchReddit(searchValue));
    setSearchValue('');
  }

  const handleChange = (e) => {
    dispatch(pullSubReddit(e.target.value));
  }

  return (
    <header className={styles.topBar}>
      <div className={styles.subReddit}>
        <select onChange={handleChange}>
          <option value={displayList} >{displayList}</option>
          <option value="popular">r/popular</option>
          <option value="politics">r/politics</option>
          <option value="gaming">r/gaming</option>
          <option value="pics">r/pics</option>
          <option value="funnymemes">r/funnymemes</option>
          <option value="technology">r/technology</option>
          <option value="movies">r/movies</option>
          <option value="aww">r/aww</option>
        </select>
      </div>
      <div className={styles.title}>
        <img className={styles.logo} src={redditImage}  alt="Reddit logo" />
        <h1><span className={styles.highlight}>Reddit</span>Minimal</h1>
      </div>
      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <input
            id="searchBox"
            type='search'
            placeholder='Search reddit...'
            size="20" 
            value={searchValue} 
            onChange={(e) => (setSearchValue(e.target.value))}
          />
          <button
            id="searchButton"
            name='searchButton'
            className={styles.searchButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </header>
  );
}
