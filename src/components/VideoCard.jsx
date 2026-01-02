import React from 'react';

export default function VideoCard({ video }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  return (
    <section>
      <img src={thumbnails.medium.url} alt={title} />
      <h4>{title}</h4>
      <p>{channelTitle}</p>
      <p>{publishedAt}</p>
    </section>
  );
}
