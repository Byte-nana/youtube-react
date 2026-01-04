import React from 'react';
import { useLocation } from 'react-router';
import ChannelInfo from '../components/ChannelInfo.jsx';
import ChannelVideos from '../components/ChannelVideos.jsx';
import styles from './VideoDetail.module.css';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelTitle, channelId, description } = video.snippet;

  return (
    <section className={styles.container}>
      <article className={styles.playerContainer}>
        <iframe
          className={styles.player}
          id='player'
          type='text/html'
          src={`http://www.youtube.com/embed/${video.id}`}
        ></iframe>
        <h4 className={styles.title}>{title}</h4>
        <ChannelInfo name={channelTitle} id={channelId} />
        <pre className={styles.description}>{description}</pre>
      </article>
      <article className={styles.channelContainer}>
        <ChannelVideos id={channelId} />
      </article>
    </section>
  );
}
