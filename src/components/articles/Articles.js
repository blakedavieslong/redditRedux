import React, { useEffect } from 'react';
import styles from './articles.css';
import { Tile } from '../tile/Tile';
import { pullPopular, selectAllArticles } from '../../features/reddit/redditSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Articles() {
  const dispatch = useDispatch();
  const articles = useSelector(selectAllArticles);

  useEffect(() => {
    dispatch(pullPopular());
  }, [dispatch]);

  if(!articles) {
    return (
      <div className='articleList'>
        <h2>Loading</h2>
      </div>
    )
  }
  return (
    <div className='articleList'>
      {articles.map((article, index) => {
        let previewImage;
        if (article.data.preview && article.data.preview.images) {
          previewImage = article.data.preview.images[0].source.url;
        } else {
          previewImage = article.data.thumbnail;
        }
        
        
        return <Tile 
          key={index}
          title={article.data.title}
          votes={article.data.score}
          author={article.data.author}
          comments={article.data.num_comments}
          imgSrc={previewImage}
          created={article.data.created}
          subReddit={article.data.subreddit}
        />
      })}
    </div>
  );
}
