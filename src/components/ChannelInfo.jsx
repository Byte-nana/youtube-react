import React from 'react';
import viewCountFormatter from '../util/viewCountFormatter';
import useChannelInfo from '../hooks/use-channelInfo';
import Avatar from './ui/Avatar';

export default function ChannelInfo({ name, id }) {
  const { isLoading, error, data: channel } = useChannelInfo(id);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {channel && (
        <>
          <Avatar url={channel.snippet.thumbnails.default.url} name={name} />
          <div>
            <p>{name}</p>
            <p>
              Subscriber{' '}
              <span>
                {viewCountFormatter.format(channel.statistics.subscriberCount)}
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
