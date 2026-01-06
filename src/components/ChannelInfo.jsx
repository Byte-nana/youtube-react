import React from 'react';
import viewCountFormatter from '../util/viewCountFormatter';
import useChannelInfo from '../hooks/use-channelInfo';
import Avatar from './ui/Avatar';

export default function ChannelInfo({ name, id }) {
  const { isLoading, error, data: channel } = useChannelInfo(id);

  return (
    <div className='flex gap-2 mt-2 items-center'>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {channel && (
        <>
          <Avatar url={channel.snippet.thumbnails.default.url} name={name} />
          <div>
            <p className='text-base font-bold'>{name}</p>
            <p className='text-sm brightness-50'>
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
