import React from 'react';
import viewCountFormatter from '../util/viewCountFormatter';
import useChannelInfo from '../hooks/use-channelInfo';
import ChannelAvatar from './ui/ChannelAvatar';

export default function ChannelInfo({ name, id }) {
  const { isLoading, error, data: channel } = useChannelInfo(id);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {channel && (
        <>
          <ChannelAvatar
            url={channel.snippet.thumbnails.default.url}
            name={name}
          />
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
