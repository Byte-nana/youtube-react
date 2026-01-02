import React from 'react';
import { useLocation } from 'react-router';
import ChannelInfo from '../components/ChannelInfo.jsx';
import ChannelVideos from '../components/ChannelVideos.jsx';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelTitle, channelId, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe
          id='player'
          type='text/html'
          width='640'
          height='390'
          src={`http://www.youtube.com/embed/${video.id}`}
        ></iframe>
        <h4>{title}</h4>
        <ChannelInfo name={channelTitle} id={channelId} />
        <pre>{description}</pre>
      </article>
      <article>
        <ChannelVideos id={channelId} />
      </article>
    </section>
  );
}
