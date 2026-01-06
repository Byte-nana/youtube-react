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
    <section
      className='p-4 rounded-2xl bg-transparent cursor-pointer transition duration-200 ease-linear group hover:bg-accent hover:rounded-2xl'
      onClick={handleClick}
    >
      <img
        className='w-full aspect-video rounded-2xl group-hover:rounded-none'
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className='flex mt-2 gap-2 '>
        {channel && variant !== 'channel' && (
          <Avatar
            url={channel.snippet.thumbnails.default.url}
            name={channelTitle}
          />
        )}
        <div>
          <h4 className='text-xl line-clamp-2'>{title}</h4>
          <p className='brightness-50'>{channelTitle}</p>
          <div className='flex gap-1 text-sm brightness-50 '>
            <p>{viewCountformatter.format(video.statistics.viewCount)} ·</p>
            <p>{dateFormatter(publishedAt)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
