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
    <section className='flex px-4'>
      <article className='w-9/12 flex flex-col'>
        <iframe
          className='w-full aspect-video rounded-4xl'
          id='player'
          type='text/html'
          src={`https://www.youtube.com/embed/${video.id}`}
        ></iframe>
        <h4 className='text-2xl mt-4'>{title}</h4>
        <ChannelInfo name={channelTitle} id={channelId} />
        <pre className='p-4 mt-4 rounded-2xl bg-accent whitespace-pre-wrap wrap-break-word'>
          {description}
        </pre>
      </article>
      <article className='w-3/12'>
        <ChannelVideos id={channelId} />
      </article>
    </section>
  );
}
