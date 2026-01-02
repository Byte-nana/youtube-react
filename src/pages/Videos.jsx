import React from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router';
import FakeYoutube from '../api/fakeYoutube';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </div>
  );
}
