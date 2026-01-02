import { useQuery } from '@tanstack/react-query';
import React from 'react';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });
  return (
    <div>
      Videos
      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </div>
  );
}
