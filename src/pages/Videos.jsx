import React from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router';
import { useYoutubeApi } from '../context/YoutubeContext';

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
    <main className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-4 gap-3'>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </main>
  );
}
