import React, { useEffect } from 'react';
import styles from './articles.module.css';
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
    <div className={styles.articleList}>
      {articles.map((article, index) => {
        let previewMedia;
        let video = false;

        if(article.data.is_video) {
          video = true;
          previewMedia = article.data.media.reddit_video.dash_url;
        } else if (article.data.preview && article.data.preview.images) {
          previewMedia = article.data.preview.images[0].source.url;
        } else {
          previewMedia = article.data.thumbnail;
        }
        
        return <Tile 
          key={index}
          title={article.data.title}
          votes={article.data.score}
          author={article.data.author}
          comments={article.data.num_comments}
          imgSrc={previewMedia}
          created={article.data.created}
          subReddit={article.data.subreddit}
          picUrl={article.data.url}
          is_video={video}
        />
      })}
    </div>
  );
}
