import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeContext';
import viewCountFormatter from '../util/viewCountFormatter';

export default function ChannelInfo({ name, id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: channel,
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: async () => {
      return youtube.getChannelInfo(id);
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {channel && (
        <>
          <img src={channel.snippet.thumbnails.default.url} alt={name} />
          <div>
            <p>{name}</p>
            <p>
              {viewCountFormatter.format(channel.statistics.subscriberCount)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
