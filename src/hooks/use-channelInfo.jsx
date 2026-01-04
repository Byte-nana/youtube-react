import React from 'react';
import { useYoutubeApi } from '../context/YoutubeContext';
import { useQuery } from '@tanstack/react-query';

export default function useChannelInfo(channelId) {
  const { youtube } = useYoutubeApi();

  const query = useQuery({
    queryKey: ['channel', channelId],
    queryFn: async () => {
      return youtube.getChannelInfo(channelId);
    },
  });

  return query;
}
