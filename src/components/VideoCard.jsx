import React from 'react';
import { useNavigate } from 'react-router';
import dateFormatter from '../util/dateFormatter';
import viewCountformatter from '../util/viewCountFormatter';
import useChannelInfo from '../hooks/use-channelInfo.jsx';
import Avatar from './ui/Avatar.jsx';

export default function VideoCard({ video, variant = 'default' }) {
  const { thumbnails, title, channelTitle, channelId, publishedAt } =
    video.snippet;
  const navigate = useNavigate();
  const { data: channel } = useChannelInfo(channelId);

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <section onClick={handleClick}>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        {channel && variant !== 'channel' && (
          <Avatar
            url={channel.snippet.thumbnails.default.url}
            name={channelTitle}
          />
        )}
        <div>
          <h4>{title}</h4>
          <p>{channelTitle}</p>
          <div>
            <p>{viewCountformatter.format(video.statistics.viewCount)}</p>
            <p>{dateFormatter(publishedAt)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
