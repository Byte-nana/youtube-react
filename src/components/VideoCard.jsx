import React from 'react';
import { useNavigate } from 'react-router';
import ChannelInfo from './ChannelInfo.jsx';
import dateFormatter from '../util/dateFormatter';
import viewCountformatter from '../util/viewCountFormatter';
import styles from './VideoCard.module.css';
import useChannelInfo from '../hooks/use-channelInfo.jsx';
import ChannelAvatar from './ui/ChannelAvatar.jsx';

export default function VideoCard({ video }) {
  const { thumbnails, title, channelTitle, channelId, publishedAt } =
    video.snippet;
  const navigate = useNavigate();
  const { data: channel } = useChannelInfo(channelId);

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <section className={styles.cardContainer} onClick={handleClick}>
      <img
        className={styles.thumbnails}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className={styles.desContainer}>
        {channel && (
          <ChannelAvatar
            url={channel.snippet.thumbnails.default.url}
            name={channelTitle}
          />
        )}
        <div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{channelTitle}</p>
          <div className={styles.wrapper}>
            <p className={styles.text}>
              {viewCountformatter.format(video.statistics.viewCount)}
            </p>
            <p className={styles.text}>{dateFormatter(publishedAt)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
