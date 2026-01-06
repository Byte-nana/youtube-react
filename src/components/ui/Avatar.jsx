import React from 'react';

export default function Avatar({ url, name }) {
  return <img className='w-8 rounded-full' src={url} alt={name} />;
}
