import React from 'react';
import viewCountFormatter from '../util/viewCountFormatter';
import useChannelInfo from '../hooks/use-channelInfo';
import Avatar from './ui/Avatar';
import styles from './ChannelInfo.module.css';

export default function ChannelInfo({ name, id }) {
  const { isLoading, error, data: channel } = useChannelInfo(id);

  return (
    <div className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...🥺</p>}
      {channel && (
        <>
          <Avatar url={channel.snippet.thumbnails.default.url} name={name} />
          <div>
            <p>{name}</p>
            <p className={styles.subscriber}>
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
