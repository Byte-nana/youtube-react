import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeContext';
import VideoCard from './VideoCard';

export default function ChannelVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: playlist,
  } = useQuery({
    queryKey: ['playlist', id],
    queryFn: async () => {
      return youtube.getChannelVideos(id);
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {playlist &&
        playlist.map((list) => <VideoCard key={list.id} video={list} />)}
    </div>
  );
}
