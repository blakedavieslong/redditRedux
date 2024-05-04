import React from 'react';
import styles from './titleBar.css';
import redditImage from './resources/pictures/reddit.jpg';

export function TitleBar() {
  return (
    <header>
      <img src={redditImage} alt="Reddit logo" />
      <h1><span>Reddit</span>Minimal</h1>
    </header>
  );
}
