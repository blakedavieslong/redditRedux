import {useRef, useEffect} from 'react';
import dashjs from 'dashjs';

const DashVideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      if (!videoRef.current) return;
  
      const player = dashjs.MediaPlayer().create();
      player.initialize(videoRef.current, src, true);
  
      return () => {
        player.reset();
      };
    }, [src]);
  
    return <video ref={videoRef} controls />;
  };
  
  export default DashVideoPlayer;