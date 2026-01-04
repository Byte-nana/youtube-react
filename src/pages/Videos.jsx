import React from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router';
import { useYoutubeApi } from '../context/YoutubeContext';
import styles from './Videos.module.css';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      return youtube.search(keyword);
    },
  });

  return (
    <main className={styles.main}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </main>
  );
}
