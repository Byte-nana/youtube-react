import React from 'react';
import { useNavigate } from 'react-router';
import dateFormatter from '../util/dateFormatter';
import viewCountformatter from '../util/viewCountFormatter';

export default function VideoCard({ video }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <section onClick={handleClick}>
      <img src={thumbnails.medium.url} alt={title} />
      <h4>{title}</h4>
      <p>{channelTitle}</p>
      <div>
        <p>{viewCountformatter.format(video.statistics.viewCount)}</p>
        <p>{dateFormatter(publishedAt)}</p>
      </div>
    </section>
  );
}
